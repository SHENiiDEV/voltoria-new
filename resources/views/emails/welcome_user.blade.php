<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome to Voltoria AI</title>
</head>
<body style="margin: 0; padding: 0; background-color: #090d16; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; color: #f8fafc;">
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color: #090d16; padding: 40px 10px;">
        <tr>
            <td align="center">
                <table role="presentation" width="600" cellspacing="0" cellpadding="0" border="0" style="max-width: 600px; width: 100%; background-color: #0f172a; border: 1px solid #1e293b; border-radius: 20px; overflow: hidden; box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.5);">
                    
                    {{-- Header Band --}}
                    <tr>
                        <td style="background: linear-gradient(135deg, #0f172a 0%, #1e1b4b 100%); padding: 35px 35px 25px 35px; border-bottom: 1px solid #1e293b;">
                            <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                                <tr>
                                    <td>
                                        <div style="font-size: 22px; font-weight: 900; color: #ffffff; letter-spacing: -0.5px; text-transform: uppercase;">
                                            VOLTORIA<span style="color: #6366f1; font-weight: 300;">.AI</span>
                                        </div>
                                        <div style="font-size: 10px; color: #94a3b8; text-transform: uppercase; font-weight: 700; tracking-spacing: 1px; margin-top: 3px;">
                                            High-Ticket Business Plan Architect &bull; INCHWARD LIMITED
                                        </div>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>

                    {{-- Body Content --}}
                    <tr>
                        <td style="padding: 35px;">
                            <div style="display: inline-block; padding: 6px 14px; background-color: #312e81; border: 1px solid #4338ca; color: #818cf8; font-size: 10px; font-weight: 800; border-radius: 6px; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 20px;">
                                &bull; Account Verified
                            </div>

                            <h1 style="font-size: 24px; font-weight: 800; color: #ffffff; margin: 0 0 16px 0; line-height: 1.25;">
                                Welcome to Voltoria AI, {{ $user->name }}!
                            </h1>

                            <p style="font-size: 14px; color: #cbd5e1; line-height: 1.6; margin: 0 0 20px 0;">
                                Your account is now active. You have instant access to our proprietary deep reasoning AI architectural engine designed to convert business briefs into <strong>€2,000+ consulting-grade investment memorandums</strong> in under 30 seconds.
                            </p>

                            {{-- Feature Cards Table --}}
                            <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color: #020617; border: 1px solid #1e293b; border-radius: 12px; margin-bottom: 25px;">
                                <tr>
                                    <td style="padding: 20px;">
                                        <div style="font-size: 11px; font-weight: 800; color: #6366f1; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 12px;">What You Can Build With Voltoria AI:</div>
                                        
                                        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                                            <tr>
                                                <td style="padding-bottom: 10px; font-size: 13px; color: #e2e8f0;">
                                                    <strong style="color: #38bdf8;">&bull; 6-Page Institutional Memorandums:</strong> Complete with Executive Summary, TAM/SAM/SOM market sizing, and Quarterly GTM Milestones.
                                                </td>
                                            </tr>
                                            <tr>
                                                <td style="padding-bottom: 10px; font-size: 13px; color: #e2e8f0;">
                                                    <strong style="color: #34d399;">&bull; 3-Year Income Statement (P&L):</strong> Quantified Revenue, COGS, Gross Profit, OpEx, and Net Profit trajectory.
                                                </td>
                                            </tr>
                                            <tr>
                                                <td style="font-size: 13px; color: #e2e8f0;">
                                                    <strong style="color: #a855f7;">&bull; Unit Economics Matrix:</strong> Precise CAC, LTV, LTV/CAC ratio (8.5x+), Payback Period, and Retention metrics.
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                            </table>

                            {{-- CTA Button --}}
                            <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="margin-bottom: 25px;">
                                <tr>
                                    <td align="center">
                                        <a href="{{ route('projects.create') }}" style="display: inline-block; padding: 16px 36px; background: linear-gradient(135deg, #6366f1 0%, #2563eb 100%); color: #ffffff; text-decoration: none; font-weight: 800; font-size: 14px; border-radius: 12px; box-shadow: 0 10px 15px -3px rgba(99, 102, 241, 0.4);">
                                            Create Your First Business Plan Brief &rarr;
                                        </a>
                                    </td>
                                </tr>
                            </table>

                            <p style="font-size: 12px; color: #94a3b8; line-height: 1.5; margin: 0;">
                                Need help or custom advisory? Reply directly to this email or reach our support team at <a href="mailto:info@voltoria.co.uk" style="color: #6366f1; text-decoration: underline;">info@voltoria.co.uk</a>.
                            </p>
                        </td>
                    </tr>

                    {{-- Footer --}}
                    <tr>
                        <td style="background-color: #020617; padding: 25px 35px; border-top: 1px solid #1e293b; text-align: center; font-size: 11px; color: #64748b; line-height: 1.5;">
                            © 2026 INCHWARD LIMITED (Company Registration No. 16021412). Operating Voltoria AI.<br>
                            Registered Office: Academy House, 11 Dunraven Place, Bridgend, Mid Glamorgan, UK, CF31 1JF.
                        </td>
                    </tr>

                </table>
            </td>
        </tr>
    </table>
</body>
</html>
