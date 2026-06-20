import json
import smtplib
import os
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
# v2


def handler(event: dict, context) -> dict:
    """Отправка заявки с сайта на почту masteroff38@mail.ru"""

    cors_headers = {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
    }

    if event.get("httpMethod") == "OPTIONS":
        return {"statusCode": 200, "headers": cors_headers, "body": ""}

    body = json.loads(event.get("body") or "{}")
    name = body.get("name", "").strip()
    phone = body.get("phone", "").strip()
    service = body.get("service", "").strip()
    description = body.get("description", "").strip()

    if not name or not phone:
        return {
            "statusCode": 400,
            "headers": cors_headers,
            "body": json.dumps({"error": "Имя и телефон обязательны"}),
        }

    smtp_password = os.environ.get("SMTP_PASSWORD", "")
    from_email = "masteroff38@mail.ru"
    to_email = "masteroff38@mail.ru"

    subject = f"Новая заявка с сайта — {service or 'Услуга не указана'}"
    html_body = f"""
    <h2 style="color:#333">Новая заявка с сайта МАСТЕРОФФ</h2>
    <table style="border-collapse:collapse;width:100%">
      <tr><td style="padding:8px;border:1px solid #ddd;background:#f9f9f9"><b>Имя</b></td><td style="padding:8px;border:1px solid #ddd">{name}</td></tr>
      <tr><td style="padding:8px;border:1px solid #ddd;background:#f9f9f9"><b>Телефон</b></td><td style="padding:8px;border:1px solid #ddd">{phone}</td></tr>
      <tr><td style="padding:8px;border:1px solid #ddd;background:#f9f9f9"><b>Услуга</b></td><td style="padding:8px;border:1px solid #ddd">{service or '—'}</td></tr>
      <tr><td style="padding:8px;border:1px solid #ddd;background:#f9f9f9"><b>Описание</b></td><td style="padding:8px;border:1px solid #ddd">{description or '—'}</td></tr>
    </table>
    """

    msg = MIMEMultipart("alternative")
    msg["Subject"] = subject
    msg["From"] = from_email
    msg["To"] = to_email
    msg.attach(MIMEText(html_body, "html", "utf-8"))

    with smtplib.SMTP_SSL("smtp.mail.ru", 465) as server:
        server.login(from_email, smtp_password)
        server.sendmail(from_email, to_email, msg.as_string())

    return {
        "statusCode": 200,
        "headers": cors_headers,
        "body": json.dumps({"ok": True}),
    }