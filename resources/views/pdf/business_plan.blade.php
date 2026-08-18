<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>{{ $project->title }} — Business Plan</title>
    <style>
        @page {
            margin: 40px 50px;
        }
        body {
            font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
            color: #1a1a1a;
            line-height: 1.6;
            font-size: 13px;
        }
        .watermark {
            position: fixed;
            top: 35%;
            left: 5%;
            width: 90%;
            text-align: center;
            opacity: 0.12;
            font-size: 48px;
            font-weight: 900;
            color: #ff0000;
            transform: rotate(-35deg);
            z-index: 1000;
            text-transform: uppercase;
            letter-spacing: 4px;
        }
        .header {
            border-bottom: 2px solid #0f172a;
            padding-bottom: 15px;
            margin-bottom: 30px;
        }
        .header-title {
            font-size: 24px;
            font-weight: 800;
            color: #0f172a;
            margin: 0;
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }
        .header-subtitle {
            font-size: 13px;
            color: #64748b;
            margin-top: 5px;
        }
        .badge {
            display: inline-block;
            padding: 4px 10px;
            font-size: 10px;
            font-weight: 700;
            border-radius: 4px;
            text-transform: uppercase;
            background: #0f172a;
            color: #ffffff;
            float: right;
        }
        .section {
            margin-bottom: 25px;
            page-break-inside: avoid;
        }
        .section-title {
            font-size: 16px;
            font-weight: 700;
            color: #0f172a;
            border-left: 4px solid #3b82f6;
            padding-left: 10px;
            margin-bottom: 12px;
            text-transform: uppercase;
        }
        .grid-2 {
            width: 100%;
            margin-bottom: 15px;
        }
        .grid-2 td {
            width: 50%;
            vertical-align: top;
            padding-right: 10px;
        }
        .card {
            background: #f8fafc;
            border: 1px solid #e2e8f0;
            border-radius: 6px;
            padding: 12px 15px;
            margin-bottom: 12px;
        }
        .card-title {
            font-weight: 700;
            font-size: 11px;
            text-transform: uppercase;
            color: #475569;
            margin-bottom: 4px;
        }
        .card-body {
            font-size: 12px;
            color: #1e293b;
        }
        table.data-table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 10px;
            margin-bottom: 15px;
        }
        table.data-table th, table.data-table td {
            border: 1px solid #cbd5e1;
            padding: 8px 10px;
            text-align: left;
            font-size: 11px;
        }
        table.data-table th {
            background-color: #0f172a;
            color: #ffffff;
            font-weight: 700;
            text-transform: uppercase;
        }
        table.data-table tr:nth-child(even) {
            background-color: #f8fafc;
        }
        ul {
            margin: 0;
            padding-left: 18px;
        }
        li {
            margin-bottom: 4px;
        }
        .footer {
            position: fixed;
            bottom: 0;
            left: 0;
            right: 0;
            border-top: 1px solid #e2e8f0;
            padding-top: 8px;
            font-size: 9px;
            color: #94a3b8;
            text-align: center;
        }
    </style>
</head>
<body>

    @if(!$isPaid)
        <div class="watermark">UNPAID DRAFT PREVIEW<br>VOLTORIA AI</div>
    @endif

    <div class="header">
        <span class="badge">{{ $isPaid ? 'INVESTMENT GRADE' : 'PREVIEW ONLY' }}</span>
        <h1 class="header-title">{{ $data['company_name'] ?? $project->title }}</h1>
        <div class="header-subtitle">{{ $data['tagline'] ?? 'High-Ticket Business Plan Memorandum' }}</div>
    </div>

    @if(isset($data['executive_summary']))
    <div class="section">
        <div class="section-title">1. Executive Summary</div>
        <div class="card">
            <div class="card-title">Vision</div>
            <div class="card-body">{{ $data['executive_summary']['vision'] ?? '' }}</div>
        </div>
        <table class="grid-2">
            <tr>
                <td>
                    <div class="card">
                        <div class="card-title">Problem Statement</div>
                        <div class="card-body">{{ $data['executive_summary']['problem'] ?? '' }}</div>
                    </div>
                </td>
                <td>
                    <div class="card">
                        <div class="card-title">Solution</div>
                        <div class="card-body">{{ $data['executive_summary']['solution'] ?? '' }}</div>
                    </div>
                </td>
            </tr>
        </table>
        <div class="card">
            <div class="card-title">Target Audience & Funding Ask</div>
            <div class="card-body">
                <strong>Audience:</strong> {{ $data['executive_summary']['target_audience'] ?? '' }}<br>
                <strong>Funding Target:</strong> {{ $data['executive_summary']['funding_ask'] ?? '' }}
            </div>
        </div>
    </div>
    @endif

    @if(isset($data['market_analysis']))
    <div class="section">
        <div class="section-title">2. Market Opportunity</div>
        <table class="data-table">
            <thead>
                <tr>
                    <th>TAM (Total Market)</th>
                    <th>SAM (Serviceable Market)</th>
                    <th>SOM (Target Share)</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{{ $data['market_analysis']['tam'] ?? 'N/A' }}</td>
                    <td>{{ $data['market_analysis']['sam'] ?? 'N/A' }}</td>
                    <td>{{ $data['market_analysis']['som'] ?? 'N/A' }}</td>
                </tr>
            </tbody>
        </table>

        @if(!empty($data['market_analysis']['competitors']))
        <div style="font-weight: 700; margin-top: 15px; margin-bottom: 6px;">Competitor Matrix:</div>
        <table class="data-table">
            <thead>
                <tr>
                    <th>Competitor</th>
                    <th>Strengths</th>
                    <th>Weaknesses</th>
                    <th>Our Advantage</th>
                </tr>
            </thead>
            <tbody>
                @foreach($data['market_analysis']['competitors'] as $comp)
                <tr>
                    <td><strong>{{ $comp['name'] ?? '' }}</strong></td>
                    <td>{{ $comp['strengths'] ?? '' }}</td>
                    <td>{{ $comp['weaknesses'] ?? '' }}</td>
                    <td>{{ $comp['competitive_advantage'] ?? '' }}</td>
                </tr>
                @endforeach
            </tbody>
        </table>
        @endif
    </div>
    @endif

    @if(isset($data['financial_model']))
    <div class="section">
        <div class="section-title">3. Financial Model & Unit Economics</div>
        
        @if(isset($data['financial_model']['unit_economics']))
        <table class="data-table" style="margin-bottom: 15px;">
            <thead>
                <tr>
                    <th>CAC</th>
                    <th>LTV</th>
                    <th>Payback Period</th>
                    <th>Gross Margin</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{{ $data['financial_model']['unit_economics']['cac'] ?? 'N/A' }}</td>
                    <td>{{ $data['financial_model']['unit_economics']['ltv'] ?? 'N/A' }}</td>
                    <td>{{ $data['financial_model']['unit_economics']['payback_period'] ?? 'N/A' }}</td>
                    <td>{{ $data['financial_model']['unit_economics']['gross_margin'] ?? 'N/A' }}</td>
                </tr>
            </tbody>
        </table>
        @endif

        @if(!empty($data['financial_model']['three_year_forecast']))
        <div style="font-weight: 700; margin-bottom: 6px;">3-Year Financial Forecast:</div>
        <table class="data-table">
            <thead>
                <tr>
                    <th>Period</th>
                    <th>Revenue</th>
                    <th>OpEx</th>
                    <th>EBITDA</th>
                    <th>Net Profit</th>
                </tr>
            </thead>
            <tbody>
                @foreach($data['financial_model']['three_year_forecast'] as $row)
                <tr>
                    <td><strong>{{ $row['year'] ?? '' }}</strong></td>
                    <td>{{ $row['revenue'] ?? '' }}</td>
                    <td>{{ $row['opex'] ?? '' }}</td>
                    <td>{{ $row['ebitda'] ?? '' }}</td>
                    <td>{{ $row['net_profit'] ?? '' }}</td>
                </tr>
                @endforeach
            </tbody>
        </table>
        @endif
    </div>
    @endif

    @if(isset($data['go_to_market']))
    <div class="section">
        <div class="section-title">4. Go-To-Market & Milestones</div>
        <div class="card">
            <div class="card-title">Sales Motion</div>
            <div class="card-body">{{ $data['go_to_market']['sales_strategy'] ?? '' }}</div>
        </div>
        @if(!empty($data['go_to_market']['key_milestones']))
        <table class="data-table">
            <thead>
                <tr>
                    <th>Timeline</th>
                    <th>Strategic Milestone</th>
                </tr>
            </thead>
            <tbody>
                @foreach($data['go_to_market']['key_milestones'] as $ms)
                <tr>
                    <td style="width: 25%;"><strong>{{ $ms['quarter'] ?? '' }}</strong></td>
                    <td>{{ $ms['milestone'] ?? '' }}</td>
                </tr>
                @endforeach
            </tbody>
        </table>
        @endif
    </div>
    @endif

    <div class="footer">
        Generated by Voltoria AI — INCHWARD LIMITED (Co. No. 16021412) &bull; Registered Office: Academy House, 11 Dunraven Place, Bridgend, CF31 1JF, UK &bull; Strictly Confidential
    </div>

</body>
</html>
