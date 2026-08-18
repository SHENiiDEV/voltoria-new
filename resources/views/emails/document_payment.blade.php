<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document Payment Verified</title>
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
                                            Document Unlocked &bull; INCHWARD LIMITED
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
                                &bull; Payment Verified & PDF Unlocked
                            </div>

                            <h1 style="font-size: 24px; font-weight: 800; color: #ffffff; margin: 0 0 16px 0; line-height: 1.25;">
                                Official Business Plan Unlocked
                            </h1>

                            <p style="font-size: 14px; color: #cbd5e1; line-height: 1.6; margin: 0 0 20px 0;">
                                Dear {{ $user->name }},<br>
                                Payment for your business plan brief <strong>"{{ $project->title }}"</strong> has been confirmed. Your un-watermarked 6-page institutional PDF export is now fully unlocked.
                            </p>

                            {{-- Transaction Card --}}
                            <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color: #020617; border: 1px solid #1e293b; border-radius: 16px; margin-bottom: 25px; overflow: hidden;">
                                <tr>
                                    <td style="padding: 24px;">
                                        <div style="font-size: 10px; font-weight: 800; color: #38bdf8; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 4px;">Paid Service Package</div>
                                        <div style="font-size: 20px; font-weight: 900; color: #ffffff; margin-bottom: 20px;">
                                            {{ $payment->getFormattedServiceName() }}
                                        </div>

                                        <hr style="border: 0; border-top: 1px solid #1e293b; margin: 0 0 16px 0;">

                                        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                                            <tr>
                                                <td style="padding-bottom: 10px; font-size: 13px; color: #94a3b8; width: 45%;">Project Title:</td>
                                                <td style="padding-bottom: 10px; font-size: 13px; color: #ffffff; font-weight: 700; text-align: right;">{{ $project->title }}</td>
                                            </tr>
                                            <tr>
                                                <td style="padding-bottom: 10px; font-size: 13px; color: #94a3b8;">Amount Deducted/Paid:</td>
                                                <td style="padding-bottom: 10px; font-size: 13px; color: #34d399; font-weight: 800; text-align: right;">€{{ number_format($payment->amount, 2) }} EUR</td>
                                            </tr>
                                            <tr>
                                                <td style="padding-bottom: 10px; font-size: 13px; color: #94a3b8;">Remaining Wallet Balance:</td>
                                                <td style="padding-bottom: 10px; font-size: 13px; color: #60a5fa; font-weight: 800; text-align: right;">€{{ number_format($user->balance, 2) }} EUR</td>
                                            </tr>
                                            <tr>
                                                <td style="font-size: 13px; color: #94a3b8;">Invoice Reference:</td>
                                                <td style="font-size: 13px; color: #cbd5e1; font-family: monospace; text-align: right;">{{ $payment->gateway_reference }}</td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                            </table>

                            {{-- Action Button --}}
                            <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="margin-bottom: 25px;">
                                <tr>
                                    <td align="center">
                                        <a href="{{ route('projects.show', $project->id) }}" style="display: inline-block; padding: 16px 36px; background: linear-gradient(135deg, #6366f1 0%, #2563eb 100%); color: #ffffff; text-decoration: none; font-weight: 800; font-size: 14px; border-radius: 12px; box-shadow: 0 10px 15px -3px rgba(99, 102, 241, 0.4);">
                                            View & Download 6-Page PDF &rarr;
                                        </a>
                                    </td>
                                </tr>
                            </table>
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
