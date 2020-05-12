
var fs = require('fs');

/** Item: This represents data in the queue */
class Item {
    id: number;
    seriesid: number;
    seriestotal: number;
    idretry: number;
    idretrythreshold: number;
    stringcontent: string;
    filecontent: string;


    constructor(id: number, seriesid: number,seriestotal: number, idretry: number, idretrythreshold: number, stringcontent: string){
        this.id = id;
        this.seriesid = seriesid;
        this.seriestotal = seriestotal;
        this.idretry = idretry;
        this.idretrythreshold = idretrythreshold;
        this.stringcontent = stringcontent;
    }

    /**
     * Reads a files contents and assigns them as an attribute in memory of Item as filecontent
     * @author Patrick Hastings <support@openmobo.com>
     * @param {string} fullFilePath - the file contents to read into memory 
     * @return {void}
     */
    readFileContents(fullFilePath: string):void{
        this.filecontent = fs.readFileSync(fullFilePath);
    }
}