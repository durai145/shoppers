export interface MailInterface {

    mkrId: string;
    dtCreated: string;
    athId: string;
    dtModified: string;
    uuid: string;
    msgId: string;
    replyId: string;
    linkId: string;
    subject: string;
    shortBody: string;
    body: string;
    receivedDate: string;
    sentDate: string;
    fromList: Array<string>;
    toList: Array<string>;
    isNewMail: boolean;
    isFlag: string;
    grpId: string;
    hasAttachmen: string;
}
