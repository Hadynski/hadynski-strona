/**
 * Hadyński Inkaso — Leads → Google Sheets
 * =======================================
 * Apps Script Web App przyjmujący POST z formularzy na hadynski.pl
 * i zapisujący każdy lead jako nowy wiersz w aktywnym arkuszu.
 *
 * Honeypot: pole 'website' (ukryte w HTML, niewidoczne dla człowieka).
 * Jeśli wypełnione → zignoruj jako spam.
 *
 * DEPLOY:
 *   1. Wklej ten kod do Apps Script (Tools → Apps Script w arkuszu)
 *   2. Deploy → New deployment → type: Web app
 *   3. Execute as: Me (Twoje konto Google)
 *   4. Who has access: Anyone
 *   5. Skopiuj URL końcowy (kończy się /exec) i wklej go w leads-config.js
 */

const SHEET_NAME = 'Leady';
const TZ = 'Europe/Warsaw';

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);

    // Honeypot — boty wypełniają, ludzie nie
    if (data.website && String(data.website).length > 0) {
      return _json({ ok: true, ignored: 'honeypot' });
    }

    const ss = SpreadsheetApp.getActiveSpreadsheet();
    let sheet = ss.getSheetByName(SHEET_NAME);

    if (!sheet) {
      sheet = ss.insertSheet(SHEET_NAME);
      sheet.appendRow([
        'Data i godzina',
        'Typ formularza',
        'Skąd (URL)',
        'Tytuł strony',
        'Imię i nazwisko',
        'Telefon',
        'Email',
        'Kwota',
        'Komornik',
        'Opis sprawy',
        'Referrer',
        'User agent'
      ]);
      sheet.setFrozenRows(1);
      sheet.getRange('A1:L1')
        .setFontWeight('bold')
        .setBackground('#f3ede3');
      sheet.setColumnWidths(1, 12, 160);
      sheet.setColumnWidth(10, 320); // Opis sprawy szerszy
    }

    const timestamp = Utilities.formatDate(new Date(), TZ, 'yyyy-MM-dd HH:mm:ss');

    sheet.appendRow([
      timestamp,
      data.formType || '',
      data.sourceUrl || '',
      data.sourceTitle || '',
      data.name || '',
      data.phone || '',
      data.email || '',
      data.amount || '',
      data.komornik || '',
      data.message || '',
      data.referrer || '',
      data.userAgent || ''
    ]);

    return _json({ ok: true });
  } catch (err) {
    return _json({ ok: false, error: String(err) });
  }
}

function doGet() {
  return ContentService
    .createTextOutput('Hadyński Inkaso — Leads endpoint. POST tylko.')
    .setMimeType(ContentService.MimeType.TEXT);
}

function _json(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
