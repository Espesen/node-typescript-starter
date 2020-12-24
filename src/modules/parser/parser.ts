import cheerio = require('cheerio');

export class Parser {

  /**
   * Takes contents of html file and extracts all email addresses
   *
   * @param htmlCode - html file contents
   * @returns array of addresses
   */

  public extractAddressesFromHtml(htmlCode: string): string[] {
    
    const $ = cheerio.load(htmlCode);
    
    const emailAddresses =  $('div.tilaisuus table tr.crm_client_row td')
      .map((index, elem) => {
        const text = $(elem).text();
        const match = text.match(/stiosoite:\s(.+)/);
        return match ? match[1] : '';
      })
      .get()      
      .filter(item => item.length);

    return emailAddresses;

  }
}
