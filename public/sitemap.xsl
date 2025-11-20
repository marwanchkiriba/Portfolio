<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:output method="html" indent="yes"/>

  <xsl:template match="/">
    <html>
      <head>
        <meta charset="utf-8"/>
        <title>Site Map - abhoy.xyz</title>
        <style>
          body { font-family: Inter, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial; color:#0f172a; background:#fff; padding:32px; }
          h1 { font-size:24px; margin-bottom:12px; }
          table { border-collapse:collapse; width:100%; max-width:980px; }
          th, td { text-align:left; padding:10px 12px; border-bottom:1px solid #e6eef8; }
          th { background:#f5f9ff; color:#0f172a; font-weight:600; }
          a { color:#0366d6; text-decoration:none }
          .muted { color:#64748b; font-size:13px }
        </style>
      </head>
      <body>
        <h1>Site Map — abhoy.xyz</h1>
        <p class="muted">This is a human-friendly view of the XML sitemap. Search engines ignore this styling.</p>
        <table>
          <thead>
            <tr>
              <th>URL</th>
              <th>Last Modified</th>
              <th>Changefreq</th>
              <th>Priority</th>
            </tr>
          </thead>
          <tbody>
            <xsl:for-each select="urlset/url">
              <tr>
                <td><a>
                    <xsl:attribute name="href"><xsl:value-of select="loc"/></xsl:attribute>
                    <xsl:value-of select="loc"/>
                  </a></td>
                <td><xsl:value-of select="lastmod"/></td>
                <td><xsl:value-of select="changefreq"/></td>
                <td><xsl:value-of select="priority"/></td>
              </tr>
            </xsl:for-each>
          </tbody>
        </table>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
