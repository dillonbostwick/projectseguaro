var builder = require('xmlbuilder');

inputXML = builder.create('QBXML', { version: '1.0'})
                     .instruction('qbxml', 'version="13.0"')
                     .ele('QBXLMMsgsRq', { onError: 'stopOnError' })
                        .ele('IBillAdd', { requestID: '3' })
                            .ele('memo')
                                .text('2 expenses')
                            .up()
                            .ele('ExpenseLineAddList')
                                .ele('AccountRef')
                                    .ele('FullName')
                                        .text('first expense code')
                                    .up()
                                .up()
                            .up()
                            .ele('ExpenseLineAddList')
                                .ele('AccountRef')
                                    .ele('FullName')
                                        .text('second expense code')
                                    .up()
                                .up()
                                .ele('Amount')
                                    .text('100')
                                .up()
                                .ele('Memo')
                                    .text('memo for a line item')
                                .up()
                            .up()

module.exports = inputXML.end();