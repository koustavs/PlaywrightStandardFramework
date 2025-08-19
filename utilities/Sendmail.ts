/*import nodemailer from 'nodemailer';
import { testConfig } from '../toolshop/data/testConfig';
import fs from 'fs';
import path from 'path';
import { log } from 'console';

const TESTCASE = process.env.npm_config_TESTCASE;
const APP = process.env.npm_config_APP;
const MAIL = process.env.npm_config_MAIL;
const PASSED = process.env.npm_config_PASSED;
const FAILED = process.env.npm_config_FAILED;
const FLAKY = process.env.npm_config_FLAKY;
const SKIPPED = process.env.npm_config_SKIPPED;
const TOTAL = process.env.npm_config_TOTAL;
const date = new Date();
const utcTimestamp = date.toUTCString(); // Example output: "Tue, 22 Apr 2025 14:30:00 GMT"
const reportDir = `./`;
// const reportDir = `./test-results/${APP}`;

export class Sendmail {
  async sendEmail_Success(): Promise<void> {
    const transporter = await nodemailer.createTransport({
      host: 'smtp.genpt.com',
      port: 25,
      secure: false,
      tls: {
        ciphers: `SSLv3`,
        rejectUnauthorized:false,
        minVersion: "TLSv1.2"
      },
      auth: false
    });

    const currentDate = new Date();
    let TestExecution = '';
    if (TESTCASE === 'Smoke') {
      TestExecution = 'smoke';
    } else if (TESTCASE === 'RegressionP2P3') {
      TestExecution = 'P2, P3 regression';
    } else if (TESTCASE === 'FullRegression') {
      TestExecution = 'full regression';
    }
    let Application = '';
    if (APP === 'storeConsole') {
      Application = 'Store Console';
    } else if (APP === 'storeFront') {
      Application = 'Store Front';
    } else if (APP === 'NXP') {
      Application = 'NXP';
    }

    const PASS = parseInt(PASSED) + parseInt(FLAKY);

    // const reportDir = "./";
    const zipReportAttachment = fs.readdirSync(reportDir)
  .filter(file => file.startsWith('TestReport') && file.endsWith('.gz'))
  // .filter(file => file.startsWith('TestReport') && file.endsWith('.zip'))
  .map(file => ({
    filename: file,
    path: path.join(reportDir, file),
    contentDisposition: 'attachment',
    contentType: 'application/gzip',  // fixed MIME type for .zip
  }));

  const zippedName=zipReportAttachment.map(a=>a.filename);
 
    var MailOption = {
      from: 'SupplyChain_Automation <SupplyChain_Automation@genpt.com>',
      to: MAIL || testConfig.mail,
      subject: `📊 ${Application} Automated ${TestExecution} Suite Execution Result - [ ${utcTimestamp} ]`, // Subject line,
      attachments: [
        ...zipReportAttachment,
        // { path:`./test-results/${APP}/index.html`, cid: 'zip@example.com', contentDisposition: 'attachment'},
        { filename: 'chart.png', path: './test-results.png', cid: 'chart@example.com' },
        { filename: 'GPC100.png', path: './utils/emailImg/GPC100.png', cid: 'gpc100@example.com' }
      ],
      html: `
      <p style="font-size: 16px;">Hi All,</p>
      <p>${Application} automated ${TestExecution} suite execution [ ${utcTimestamp} ] is complete. Check out the Full Test Report in the attached file - <i> ${zippedName}</i>.</p><br/>
      <img src="cid:chart@example.com" alt="Chart"/>
      <p style="font-size: 16px;">Total: ${TOTAL} | ✅ Passed: ${PASS} (⚠️ Flaky: ${FLAKY}) | ❌ Failed: ${FAILED} | ⏭️ Skipped: ${SKIPPED}</p>
      <ul style="font-size: 14px;">
      <li>✅ Passed: Test cases executed and met expected results.</li>
      <li>⚠️ Flaky: Test cases executed and met expected results after multiple attempts.</li>
      <li>❌ Failed: Test cases executed but did not meet the expected results.</li>
      <li>⏭️ Skipped: Test cases not run during this execution cycle.</li>
      </ul>
      <p style="font-size: 16px;">Please do not reply to this email, as this is an auto-generated email.<a href="cid:zip@example.com"></a></p>
      <p style="font-size: 16px;">Thanks,<br/>SCM Automation Team.<br/>
      <img src="cid:gpc100@example.com" alt="Org GPC"/>
      </p>`,
      text: ``
    };

    try {
      let info = await transporter.sendMail(MailOption);
      console.log('Message sent: %s', info.messageId);
      // console.log("zip: "+ JSON.stringify(zipReportAttachment,null,2));
      // zipReportAttachment.map(a=>a.filename).forEach(f=>console.log("File:"+f));
    } catch (error) {
      console.error('Error sending email:', error);
    }
  }

  async deleteArchieve(): Promise<void> {

    fs.readdirSync(reportDir)
  .filter(file => file.startsWith('TestReport') && file.endsWith('.zip'))
  .forEach(file => {
    const filePath = path.join(reportDir, file);
    try {
      fs.unlinkSync(filePath);
      console.log(`Deleted: ${filePath}`);
    } catch (err) {
      console.error(`Error deleting ${filePath}:`, err);
    }
  });

  }  
}

new Sendmail().sendEmail_Success();

*/