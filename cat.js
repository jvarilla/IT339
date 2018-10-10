/*Simple node file for creating read stream*/

'use strict'

require('fs').createReadStream(process.argv[2]).pipe(process.stdout);
