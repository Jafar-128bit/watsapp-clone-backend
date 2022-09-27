const Pusher = require("pusher");
const mongoose = require('mongoose');

const pusher = new Pusher({
    appId: "1482779",
    key: "3fe1fd3833bffcaa301e",
    secret: "5e52bb58899f125e077c",
    cluster: "ap2",
    useTLS: true
});

const changeEventStream = () => {
    const db = mongoose.connection;
    db.once("open", () => {
        console.log("DB Connected");
        const messageCollection = db.collection('messagecontents');
        const changeStream = messageCollection.watch();
        changeStream.on('change', (change => {
            if (change.operationType === 'insert') {
                const messageDetails = change.fullDocument;
                pusher.trigger('messages', 'inserted', {
                    name: messageDetails.user,
                    message: messageDetails.message
                }).then(response => {
                    console.log("Function Executed");
                });
            } else {
                console.log('Error triggering Pusher');
            }
        }));
    });
}

module.exports = changeEventStream;
