<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>New Support Ticket Received</title>
</head>
<body style="margin: 0; padding: 0; background-color: #020617; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; -webkit-font-smoothing: antialiased; color: #f8fafc;">
    <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: #020617; padding: 30px 10px;">
        <tr>
            <td align="center">
                <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px; background-color: #0b1329; border: 1px solid #1e293b; border-radius: 20px; overflow: hidden; box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.7);">
                    
                    <!-- Header -->
                    <tr>
                        <td style="padding: 36px 40px 24px; text-align: center; border-bottom: 1px solid #1e293b; background: linear-gradient(180deg, rgba(99, 102, 241, 0.15) 0%, rgba(11, 19, 41, 0) 100%);">
                            <table role="presentation" border="0" cellpadding="0" cellspacing="0" align="center" style="margin-bottom: 12px;">
                                <tr>
                                    <td style="background: linear-gradient(135deg, #6366f1 0%, #3b82f6 50%, #06b6d4 100%); width: 44px; height: 44px; border-radius: 12px; text-align: center; vertical-align: middle; font-size: 22px; font-weight: bold; color: #ffffff;">
                                        ⚡
                                    </td>
                                </tr>
                            </table>
                            <h1 style="margin: 0; font-size: 22px; font-weight: 800; color: #ffffff; letter-spacing: -0.5px;">
                                New Support Ticket Inquiry
                            </h1>
                            <p style="margin: 6px 0 0; font-size: 12px; color: #38bdf8; font-weight: 700; text-transform: uppercase; letter-spacing: 1px;">
                                Trade & Engineering Help Desk (SLA 24–48h)
                            </p>
                        </td>
                    </tr>

                    <!-- Body Content -->
                    <tr>
                        <td style="padding: 32px 40px;">
                            <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: #0f172a; border: 1px solid #334155; border-radius: 14px; margin-bottom: 24px;">
                                <tr>
                                    <td style="padding: 16px 20px; border-bottom: 1px solid #1e293b;">
                                        <span style="font-size: 11px; font-weight: 700; color: #94a3b8; text-transform: uppercase;">From:</span>
                                        <div style="font-size: 14px; font-weight: 700; color: #ffffff; margin-top: 2px;">{{ $name }} &lt;{{ $email }}&gt;</div>
                                    </td>
                                </tr>
                                <tr>
                                    <td style="padding: 16px 20px; border-bottom: 1px solid #1e293b;">
                                        <span style="font-size: 11px; font-weight: 700; color: #94a3b8; text-transform: uppercase;">Subject:</span>
                                        <div style="font-size: 14px; font-weight: 700; color: #818cf8; margin-top: 2px;">{{ $subject }}</div>
                                    </td>
                                </tr>
                                <tr>
                                    <td style="padding: 16px 20px;">
                                        <span style="font-size: 11px; font-weight: 700; color: #94a3b8; text-transform: uppercase;">Date Received:</span>
                                        <div style="font-size: 13px; color: #cbd5e1; margin-top: 2px;">{{ $date }}</div>
                                    </td>
                                </tr>
                            </table>

                            <div style="margin-bottom: 10px; font-size: 12px; font-weight: 700; color: #94a3b8; text-transform: uppercase; letter-spacing: 0.5px;">
                                Inquiry Message:
                            </div>
                            <div style="padding: 20px; background-color: #020617; border: 1px solid #1e293b; border-radius: 12px; font-size: 14px; line-height: 1.6; color: #f1f5f9; white-space: pre-wrap;">
{{ $messageBody }}
                            </div>

                            <!-- Reply CTA -->
                            <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="margin-top: 28px;">
                                <tr>
                                    <td align="center">
                                        <a href="mailto:{{ $email }}?subject=Re: {{ urlencode($subject) }}" style="display: inline-block; background: linear-gradient(135deg, #6366f1 0%, #2563eb 100%); color: #ffffff; text-decoration: none; font-size: 14px; font-weight: 700; padding: 14px 32px; border-radius: 12px; box-shadow: 0 10px 25px -5px rgba(99, 102, 241, 0.4);">
                                            Reply Directly to Client &rarr;
                                        </a>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>

                    <!-- Footer -->
                    <tr>
                        <td style="padding: 24px 40px; background-color: #070d1e; border-top: 1px solid #1e293b; text-align: center;">
                            <p style="margin: 0 0 6px; font-size: 11px; color: #64748b; font-weight: 600;">
                                Automated Ticket Notification &bull; Merchant of Record: INCHWARD LIMITED (UK Co. No. 16021412)
                            </p>
                            <p style="margin: 0; font-size: 11px; color: #475569;">
                                Academy House, 11 Dunraven Place, Bridgend, Mid Glamorgan, CF31 1JF, United Kingdom
                            </p>
                        </td>
                    </tr>

                </table>
            </td>
        </tr>
    </table>
</body>
</html>
