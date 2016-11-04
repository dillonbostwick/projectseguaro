var builder = require('xmlbuilder');

inputXML = builder.create('QBXML', { version: '1.0'})
                     .instruction('qbxml', 'version="13.0"')
                     .ele('QBXLMMsgsRq', { onError: 'stopOnError' })
                        .ele('BillAddRq', { requestID: '3' })
                            .ele('BillAdd')
                                .ele('vendorRef')
                                    .ele('FullName')
                                        .text('Marsi Bostwick ~ NT')
                                    .up()
                                .up()
                                // .ele('RefNumber')
                                //     .text('abc123')
                                // .up()
                                // .ele()
                                // .ele('memo')
                                //     .text('2 expenses')
                                // .up()
                                // .ele('ExpenseLineAdd')
                                //     .ele('AccountRef')
                                //         .ele('FullName')
                                //             .text('first expense code')
                                //         .up()
                                //     .up()
                                // .up()
                                // .ele('ItemLineAdd')
                                //     .ele('AccountRef')
                                //         .ele('FullName')
                                //             .text('second expense code')
                                //         .up()
                                //     .up()
                                //     .ele('Amount')
                                //         .text('100.00')
                                //     .up()
                                //     .ele('Memo')
                                //         .text('memo for a line item')
                                //     .up()
                                // .up()
                            .up()
                        .up()
                    .up()


module.exports = inputXML.end();