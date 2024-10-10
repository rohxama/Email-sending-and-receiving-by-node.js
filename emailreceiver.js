import Imap from 'imap'; // Internet Message Access Protocol
import { simpleParser } from 'mailparser'; // Makes code readable

// Making a connection
const imap = new Imap({
    user: 'criminal87654@gmail.com',
    password: 'epal mpvi gmjb ssau',
    host: 'imap.gmail.com',
    port: 993,
    tls: true,
    tlsOptions: {
        rejectUnauthorized: false 
    }
});

// Open email box
function openInbox(cb) {
    imap.openBox('INBOX', false, cb);
}

imap.once('ready', function () {
    openInbox(function (err, box) {
        if (err) throw err;
        console.log('Successfully opened inbox:', box);
        imap.search(['UNSEEN'], function (err, results) {
            if (err) throw err;

            if (!results || !results.length) {
                console.log('No new unread emails!');
                imap.end();
                return;
            }
            const fetch = imap.fetch(results, { bodies: '' });
            fetch.on('message', function (msg) {
                msg.on('body', function (stream) {
                    simpleParser(stream, (err, mail) => {
                        if (err) throw err;
                        console.log('New Email Subject:', mail.subject);
                    });
                });
            });
        });
    });
});

imap.once('error', function (err) {
    console.log('Connection error:', err);
});

imap.connect();