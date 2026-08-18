<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>{{ $project->title }} — Investment Memorandum</title>
    <style>
        @page {
            margin: 35px 40px;
        }
        body {
            font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
            color: #0f172a;
            line-height: 1.5;
            font-size: 11.5px;
            background: #ffffff;
        }
        .watermark {
            position: fixed;
            top: 35%;
            left: 5%;
            width: 90%;
            text-align: center;
            opacity: 0.10;
            font-size: 44px;
            font-weight: 900;
            color: #dc2626;
            transform: rotate(-35deg);
            z-index: 1000;
            text-transform: uppercase;
            letter-spacing: 4px;
        }
        .page-break {
            page-break-before: always;
        }
        
        /* Cover Page Styling */
        .cover-page {
            padding-top: 40px;
            text-align: left;
        }
        .cover-badge {
            display: inline-block;
            padding: 5px 12px;
            font-size: 9.5px;
            font-weight: 800;
            letter-spacing: 1.5px;
            border-radius: 4px;
            text-transform: uppercase;
            background: #0f172a;
            color: #38bdf8;
            margin-bottom: 20px;
        }
        .cover-title {
            font-size: 32px;
            font-weight: 900;
            color: #0f172a;
            line-height: 1.15;
            margin: 0 0 12px 0;
            text-transform: uppercase;
            letter-spacing: -0.5px;
        }
        .cover-tagline {
            font-size: 14px;
            color: #475569;
            margin-bottom: 30px;
            font-weight: 500;
            max-width: 90%;
            border-left: 3px solid #3b82f6;
            padding-left: 12px;
        }
        .cover-meta {
            margin-top: 50px;
            border-top: 2px solid #e2e8f0;
            padding-top: 20px;
            width: 100%;
        }
        .cover-meta td {
            vertical-align: top;
            padding-bottom: 10px;
            font-size: 10.5px;
        }
        .meta-label {
            font-weight: 700;
            color: #64748b;
            text-transform: uppercase;
            font-size: 8.5px;
            letter-spacing: 0.5px;
        }
        .meta-value {
            font-weight: 600;
            color: #0f172a;
            font-size: 10.5px;
        }

        /* Section Header & Styling */
        .section-header {
            border-bottom: 2px solid #0f172a;
            padding-bottom: 6px;
            margin-bottom: 15px;
        }
        .section-number {
            font-size: 9.5px;
            font-weight: 800;
            color: #3b82f6;
            text-transform: uppercase;
            letter-spacing: 1px;
        }
        .section-title {
            font-size: 16px;
            font-weight: 800;
            color: #0f172a;
            margin: 2px 0 0 0;
            text-transform: uppercase;
        }
        
        .card {
            background: #f8fafc;
            border: 1px solid #e2e8f0;
            border-radius: 6px;
            padding: 10px 12px;
            margin-bottom: 12px;
        }
        .card-title {
            font-weight: 800;
            font-size: 9.5px;
            text-transform: uppercase;
            color: #334155;
            letter-spacing: 0.5px;
            margin-bottom: 4px;
        }
        .card-body {
            font-size: 11px;
            color: #1e293b;
            line-height: 1.45;
        }

        /* Metric Highlights */
        .metric-grid {
            width: 100%;
            margin-bottom: 15px;
            border-collapse: separate;
            border-spacing: 6px;
        }
        .metric-box {
            background: #f1f5f9;
            border: 1px solid #cbd5e1;
            border-radius: 6px;
            padding: 8px;
            text-align: center;
        }
        .metric-value {
            font-size: 16px;
            font-weight: 900;
            color: #0f172a;
        }
        .metric-lbl {
            font-size: 8.5px;
            font-weight: 700;
            color: #64748b;
            text-transform: uppercase;
            margin-top: 2px;
        }

        /* Tables */
        table.data-table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 8px;
            margin-bottom: 15px;
        }
        table.data-table th, table.data-table td {
            border: 1px solid #cbd5e1;
            padding: 6px 8px;
            text-align: left;
            font-size: 10px;
        }
        table.data-table th {
            background-color: #0f172a;
            color: #ffffff;
            font-weight: 800;
            text-transform: uppercase;
            font-size: 9px;
            letter-spacing: 0.5px;
        }
        table.data-table tr:nth-child(even) {
            background-color: #f8fafc;
        }

        /* TOC Styling */
        .toc-box {
            background: #f8fafc;
            border: 1px solid #cbd5e1;
            border-radius: 6px;
            padding: 12px;
            margin-bottom: 20px;
        }
        .toc-item {
            display: flex;
            justify-content: space-between;
            border-bottom: 1px dashed #cbd5e1;
            padding: 5px 0;
            font-size: 10.5px;
            font-weight: 600;
            color: #1e293b;
        }

        .footer {
            position: fixed;
            bottom: 0;
            left: 0;
            right: 0;
            border-top: 1px solid #e2e8f0;
            padding-top: 6px;
            font-size: 8px;
            color: #94a3b8;
            text-align: center;
        }
    </style>
</head>
<body>

    @if(!$isPaid)
        <div class="watermark">UNPAID DRAFT PREVIEW &bull; VOLTORIA AI</div>
    @endif

    {{-- COVER PAGE --}}
    <div class="cover-page">
        <span class="cover-badge">{{ $isPaid ? 'INVESTMENT MEMORANDUM & PITCH SPECIFICATION' : 'UNPAID DRAFT PREVIEW MEMORANDUM' }}</span>
        
        <h1 class="cover-title">{{ $data['company_name'] ?? $project->title }}</h1>
        <div class="cover-tagline">{{ $data['tagline'] ?? 'Next-Generation Automated B2B Intelligence & Revenue Scaling Platform' }}</div>

        <div style="background: #f8fafc; border: 1px solid #e2e8f0; padding: 16px; border-radius: 6px; margin-top: 30px;">
            <div style="font-weight: 800; font-size: 10.5px; text-transform: uppercase; color: #0f172a; margin-bottom: 8px;">Executive Document Brief</div>
            <div style="font-size: 11px; color: #334155; line-height: 1.5;">
                This formal Investment Memorandum presents the strategic business architecture, market sizing (TAM/SAM/SOM), quantitative unit economics, 3-Year P&L financial trajectory, and risk mitigation framework for <strong>{{ $data['company_name'] ?? $project->title }}</strong>. Prepared using Voltoria AI's proprietary deep-reasoning architectural engine.
            </div>
        </div>

        <table class="cover-meta">
            <tr>
                <td style="width: 33%;">
                    <div class="meta-label">Document Ref</div>
                    <div class="meta-value">VOL-{{ strtoupper(substr(md5($project->id . $project->created_at), 0, 8)) }}</div>
                </td>
                <td style="width: 33%;">
                    <div class="meta-label">Generation Date</div>
                    <div class="meta-value">{{ $project->created_at->format('F d, Y') }}</div>
                </td>
                <td style="width: 33%;">
                    <div class="meta-label">Classification</div>
                    <div class="meta-value" style="color: #dc2626; font-weight: 800;">STRICTLY CONFIDENTIAL</div>
                </td>
            </tr>
            <tr>
                <td>
                    <div class="meta-label">Prepared For</div>
                    <div class="meta-value">Venture Investor & Visa Review Board</div>
                </td>
                <td>
                    <div class="meta-label">Architect Engine</div>
                    <div class="meta-value">Voltoria AI 2.0</div>
                </td>
                <td>
                    <div class="meta-label">Corporate Issuer</div>
                    <div class="meta-value">INCHWARD LIMITED (Co. 16021412)</div>
                </td>
            </tr>
        </table>
    </div>

    {{-- PAGE 2: TABLE OF CONTENTS & SECTION 1 --}}
    <div class="page-break"></div>

    <div class="section-header">
        <div class="section-number">Document Navigation</div>
        <div class="section-title">Table of Contents</div>
    </div>

    <div class="toc-box">
        <div class="toc-item"><span>1. Executive Summary & Strategic Positioning</span> <span>Page 2</span></div>
        <div class="toc-item"><span>2. Market Opportunity & Industry Landscape (TAM / SAM / SOM)</span> <span>Page 3</span></div>
        <div class="toc-item"><span>3. Comprehensive Financial Model & Unit Economics (3-Year P&L)</span> <span>Page 4</span></div>
        <div class="toc-item"><span>4. Operations Strategy & Infrastructure Roadmap</span> <span>Page 5</span></div>
        <div class="toc-item"><span>5. Go-To-Market & Strategic Milestones</span> <span>Page 5</span></div>
        <div class="toc-item"><span>6. Risk Management, Corporate Governance & Appendix</span> <span>Page 6</span></div>
    </div>

    <div class="section-header" style="margin-top: 20px;">
        <div class="section-number">Chapter 1</div>
        <div class="section-title">Executive Summary</div>
    </div>

    @if(isset($data['executive_summary']))
        <div class="card">
            <div class="card-title">Company Vision & Strategic Mission</div>
            <div class="card-body">{{ $data['executive_summary']['vision'] ?? '' }}</div>
        </div>

        <table style="width: 100%; margin-bottom: 10px;">
            <tr>
                <td style="width: 50%; vertical-align: top; padding-right: 6px;">
                    <div class="card">
                        <div class="card-title" style="color: #dc2626;">The Core Problem & Market Pain</div>
                        <div class="card-body">{{ $data['executive_summary']['problem'] ?? '' }}</div>
                    </div>
                </td>
                <td style="width: 50%; vertical-align: top; padding-left: 6px;">
                    <div class="card">
                        <div class="card-title" style="color: #16a34a;">The Proprietary Solution</div>
                        <div class="card-body">{{ $data['executive_summary']['solution'] ?? '' }}</div>
                    </div>
                </td>
            </tr>
        </table>

        <div class="card">
            <div class="card-title">Target Audience Profile & Market Positioning</div>
            <div class="card-body">{{ $data['executive_summary']['target_audience'] ?? '' }}</div>
        </div>

        <div class="card" style="border-left: 4px solid #16a34a; background: #f0fdf4;">
            <div class="card-title" style="color: #166534;">Capital Funding Requirement & Allocation</div>
            <div class="card-body">
                <strong>Investment Target:</strong> {{ $data['executive_summary']['funding_ask'] ?? '' }}<br>
                <strong>Fund Deployment Plan:</strong> {{ $data['executive_summary']['capital_allocation'] ?? '45% Marketing & Sales, 35% Product & AI Engineering, 20% G&A' }}
            </div>
        </div>
    @endif

    {{-- PAGE 3: SECTION 2 - MARKET ANALYSIS --}}
    <div class="page-break"></div>

    <div class="section-header">
        <div class="section-number">Chapter 2</div>
        <div class="section-title">Market Opportunity & Competitor Landscape</div>
    </div>

    @if(isset($data['market_analysis']))
        <div style="font-weight: 800; font-size: 10.5px; text-transform: uppercase; color: #0f172a; margin-bottom: 6px;">Quantified Market Size Metrics:</div>
        
        <table class="metric-grid">
            <tr>
                <td style="width: 33%;">
                    <div class="metric-box">
                        <div class="metric-value" style="color: #0f172a;">{{ $data['market_analysis']['tam'] ?? 'N/A' }}</div>
                        <div class="metric-lbl">TAM (Total Addressable)</div>
                    </div>
                </td>
                <td style="width: 33%;">
                    <div class="metric-box">
                        <div class="metric-value" style="color: #2563eb;">{{ $data['market_analysis']['sam'] ?? 'N/A' }}</div>
                        <div class="metric-lbl">SAM (Serviceable Market)</div>
                    </div>
                </td>
                <td style="width: 33%;">
                    <div class="metric-box">
                        <div class="metric-value" style="color: #0891b2;">{{ $data['market_analysis']['som'] ?? 'N/A' }}</div>
                        <div class="metric-lbl">SOM (Target Year 3)</div>
                    </div>
                </td>
            </tr>
        </table>

        @if(!empty($data['market_analysis']['industry_trends']))
        <div class="card">
            <div class="card-title">Key Industry & Macro Technology Trends</div>
            <div class="card-body">
                <ul style="margin: 0; padding-left: 15px;">
                    @foreach($data['market_analysis']['industry_trends'] as $trend)
                        <li style="margin-bottom: 3px;">{{ $trend }}</li>
                    @endforeach
                </ul>
            </div>
        </div>
        @endif

        @if(!empty($data['market_analysis']['competitors']))
        <div style="font-weight: 800; font-size: 10.5px; text-transform: uppercase; color: #0f172a; margin-top: 15px; margin-bottom: 6px;">Competitive Advantage Matrix:</div>
        <table class="data-table">
            <thead>
                <tr>
                    <th style="width: 22%;">Competitor Type</th>
                    <th style="width: 26%;">Strengths</th>
                    <th style="width: 26%;">Weaknesses</th>
                    <th style="width: 26%;">Voltoria Advantage</th>
                </tr>
            </thead>
            <tbody>
                @foreach($data['market_analysis']['competitors'] as $comp)
                <tr>
                    <td><strong>{{ $comp['name'] ?? '' }}</strong></td>
                    <td>{{ $comp['strengths'] ?? '' }}</td>
                    <td>{{ $comp['weaknesses'] ?? '' }}</td>
                    <td style="color: #0284c7; font-weight: 700;">{{ $comp['competitive_advantage'] ?? '' }}</td>
                </tr>
                @endforeach
            </tbody>
        </table>
        @endif
    @endif

    {{-- PAGE 4: SECTION 3 - FINANCIAL MODEL --}}
    <div class="page-break"></div>

    <div class="section-header">
        <div class="section-number">Chapter 3</div>
        <div class="section-title">Comprehensive Financial Model & P&L Trajectory</div>
    </div>

    @if(isset($data['financial_model']))
        <div class="card">
            <div class="card-title">Monetization Engine & Revenue Streams</div>
            <div class="card-body">
                <ul style="margin: 0; padding-left: 15px;">
                    @foreach($data['financial_model']['revenue_streams'] ?? [] as $stream)
                        <li style="margin-bottom: 3px;">{{ $stream }}</li>
                    @endforeach
                </ul>
            </div>
        </div>

        @if(isset($data['financial_model']['unit_economics']))
        <div style="font-weight: 800; font-size: 10.5px; text-transform: uppercase; color: #0f172a; margin-top: 12px; margin-bottom: 6px;">Unit Economics Breakdown:</div>
        <table class="data-table">
            <thead>
                <tr>
                    <th>CAC</th>
                    <th>LTV</th>
                    <th>LTV/CAC Ratio</th>
                    <th>Payback Period</th>
                    <th>Gross Margin</th>
                    <th>Retention</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{{ $data['financial_model']['unit_economics']['cac'] ?? 'N/A' }}</td>
                    <td style="color: #16a34a; font-weight: 700;">{{ $data['financial_model']['unit_economics']['ltv'] ?? 'N/A' }}</td>
                    <td>{{ $data['financial_model']['unit_economics']['ltv_cac_ratio'] ?? '8.5x' }}</td>
                    <td style="color: #0284c7; font-weight: 700;">{{ $data['financial_model']['unit_economics']['payback_period'] ?? 'N/A' }}</td>
                    <td>{{ $data['financial_model']['unit_economics']['gross_margin'] ?? 'N/A' }}</td>
                    <td>{{ $data['financial_model']['unit_economics']['retention_rate'] ?? '94%' }}</td>
                </tr>
            </tbody>
        </table>
        @endif

        @if(!empty($data['financial_model']['three_year_forecast']))
        <div style="font-weight: 800; font-size: 10.5px; text-transform: uppercase; color: #0f172a; margin-top: 15px; margin-bottom: 6px;">3-Year Income Statement (P&L Forecast):</div>
        <table class="data-table">
            <thead>
                <tr>
                    <th>Financial Period</th>
                    <th>Gross Revenue</th>
                    <th>COGS</th>
                    <th>Gross Profit</th>
                    <th>OpEx</th>
                    <th>EBITDA</th>
                    <th>Net Profit</th>
                </tr>
            </thead>
            <tbody>
                @foreach($data['financial_model']['three_year_forecast'] as $row)
                <tr>
                    <td><strong>{{ $row['year'] ?? '' }}</strong></td>
                    <td style="color: #16a34a; font-weight: 700;">{{ $row['revenue'] ?? '' }}</td>
                    <td>{{ $row['cogs'] ?? '€' . number_format((float)filter_var($row['revenue'] ?? 0, FILTER_SANITIZE_NUMBER_FLOAT, FILTER_FLAG_ALLOW_FRACTION) * 0.12, 0) }}</td>
                    <td>{{ $row['gross_profit'] ?? '€' . number_format((float)filter_var($row['revenue'] ?? 0, FILTER_SANITIZE_NUMBER_FLOAT, FILTER_FLAG_ALLOW_FRACTION) * 0.88, 0) }}</td>
                    <td>{{ $row['opex'] ?? '' }}</td>
                    <td style="color: #0284c7; font-weight: 700;">{{ $row['ebitda'] ?? '' }}</td>
                    <td style="color: #16a34a; font-weight: 800;">{{ $row['net_profit'] ?? '' }}</td>
                </tr>
                @endforeach
            </tbody>
        </table>
        @endif
    @endif

    {{-- PAGE 5: OPERATIONS & GTM --}}
    <div class="page-break"></div>

    <div class="section-header">
        <div class="section-number">Chapter 4 & 5</div>
        <div class="section-title">Operations & Go-To-Market Roadmap</div>
    </div>

    @if(isset($data['operations']))
        <div class="card">
            <div class="card-title">Technology Architecture & Infrastructure</div>
            <div class="card-body">{{ $data['operations']['tech_stack'] ?? '' }}</div>
        </div>
        <div class="card">
            <div class="card-title">Operational Scalability Strategy</div>
            <div class="card-body">{{ $data['operations']['scalability_strategy'] ?? '' }}</div>
        </div>
    @endif

    @if(isset($data['go_to_market']))
        <div class="card" style="margin-top: 15px;">
            <div class="card-title">Commercial Sales Motion & Pipeline Strategy</div>
            <div class="card-body">{{ $data['go_to_market']['sales_strategy'] ?? '' }}</div>
        </div>

        @if(!empty($data['go_to_market']['key_milestones']))
        <div style="font-weight: 800; font-size: 10.5px; text-transform: uppercase; color: #0f172a; margin-top: 15px; margin-bottom: 6px;">Quarterly Strategic Milestones:</div>
        <table class="data-table">
            <thead>
                <tr>
                    <th style="width: 25%;">Target Period</th>
                    <th>Key Strategic Milestone</th>
                </tr>
            </thead>
            <tbody>
                @foreach($data['go_to_market']['key_milestones'] as $ms)
                <tr>
                    <td><strong>{{ $ms['quarter'] ?? '' }}</strong></td>
                    <td>{{ $ms['milestone'] ?? '' }}</td>
                </tr>
                @endforeach
            </tbody>
        </table>
        @endif
    @endif

    {{-- PAGE 6: RISKS & APPENDIX --}}
    <div class="page-break"></div>

    <div class="section-header">
        <div class="section-number">Chapter 6 & Appendix</div>
        <div class="section-title">Risk Governance & Legal Disclaimers</div>
    </div>

    @if(isset($data['risk_management']))
        <table style="width: 100%; margin-bottom: 15px;">
            <tr>
                <td style="width: 50%; vertical-align: top; padding-right: 6px;">
                    <div class="card">
                        <div class="card-title" style="color: #dc2626;">Identified Market & Financial Risks</div>
                        <div class="card-body">
                            <ul style="margin: 0; padding-left: 15px;">
                                @foreach($data['risk_management']['market_risks'] ?? [] as $risk)
                                    <li style="margin-bottom: 3px;">{{ $risk }}</li>
                                @endforeach
                                @foreach($data['risk_management']['financial_risks'] ?? [] as $risk)
                                    <li style="margin-bottom: 3px;">{{ $risk }}</li>
                                @endforeach
                            </ul>
                        </div>
                    </div>
                </td>
                <td style="width: 50%; vertical-align: top; padding-left: 6px;">
                    <div class="card">
                        <div class="card-title" style="color: #16a34a;">Strategic Risk Mitigation Actions</div>
                        <div class="card-body">
                            <ul style="margin: 0; padding-left: 15px;">
                                @foreach($data['risk_management']['mitigation_strategies'] ?? [] as $mit)
                                    <li style="margin-bottom: 3px;">{{ $mit }}</li>
                                @endforeach
                            </ul>
                        </div>
                    </div>
                </td>
            </tr>
        </table>
    @endif

    <div style="margin-top: 30px; border-top: 2px solid #e2e8f0; padding-top: 15px;">
        <div style="font-weight: 800; font-size: 10.5px; text-transform: uppercase; color: #0f172a; margin-bottom: 6px;">Appendix: Legal Disclaimers & Merchant Statement</div>
        
        <div class="card" style="background: #f1f5f9;">
            <div class="card-title">Confidentiality & Non-Warranty Notice</div>
            <div class="card-body" style="font-size: 9.5px; color: #475569;">
                This business plan memorandum has been produced automatically using Voltoria AI's deep reasoning architectural engine operated by <strong>INCHWARD LIMITED</strong>. All financial projections, unit economics, and market estimates represent algorithmic calculations based on user input and market models. While designed to conform to institutional investment standards, final due diligence remains the responsibility of the client.
            </div>
        </div>

        <div style="font-size: 9.5px; color: #64748b; margin-top: 12px; line-height: 1.45;">
            <strong>Merchant of Record & Legal Entity:</strong> INCHWARD LIMITED &bull; Company Number: 16021412<br>
            <strong>Registered Office Address:</strong> Academy House, 11 Dunraven Place, Bridgend, Mid Glamorgan, United Kingdom, CF31 1JF
        </div>
    </div>

    <div class="footer">
        Generated by Voltoria AI — INCHWARD LIMITED (Co. No. 16021412) &bull; Registered Office: Academy House, 11 Dunraven Place, Bridgend, CF31 1JF, UK &bull; Strictly Confidential
    </div>

</body>
</html>
