ace.define("ace/mode/asciidoc_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"],(function(require,exports,module){"use strict";var oop=require("../lib/oop"),TextHighlightRules=require("./text_highlight_rules").TextHighlightRules,AsciidocHighlightRules=function(){function quoteRule(ch){return(/\w/.test(ch)?"\\b":"(?:\\B|^)")+ch+"[^"+ch+"].*?"+ch+"(?![\\w*])"}this.$rules={start:[{token:"empty",regex:/$/},{token:"literal",regex:/^\.{4,}\s*$/,next:"listingBlock"},{token:"literal",regex:/^-{4,}\s*$/,next:"literalBlock"},{token:"string",regex:/^\+{4,}\s*$/,next:"passthroughBlock"},{token:"keyword",regex:/^={4,}\s*$/},{token:"text",regex:/^\s*$/},{token:"empty",regex:"",next:"dissallowDelimitedBlock"}],dissallowDelimitedBlock:[{include:"paragraphEnd"},{token:"comment",regex:"^//.+$"},{token:"keyword",regex:"^(?:NOTE|TIP|IMPORTANT|WARNING|CAUTION):"},{include:"listStart"},{token:"literal",regex:/^\s+.+$/,next:"indentedBlock"},{token:"empty",regex:"",next:"text"}],paragraphEnd:[{token:"doc.comment",regex:/^\/{4,}\s*$/,next:"commentBlock"},{token:"tableBlock",regex:/^\s*[|!]=+\s*$/,next:"tableBlock"},{token:"keyword",regex:/^(?:--|''')\s*$/,next:"start"},{token:"option",regex:/^\[.*\]\s*$/,next:"start"},{token:"pageBreak",regex:/^>{3,}$/,next:"start"},{token:"literal",regex:/^\.{4,}\s*$/,next:"listingBlock"},{token:"titleUnderline",regex:/^(?:={2,}|-{2,}|~{2,}|\^{2,}|\+{2,})\s*$/,next:"start"},{token:"singleLineTitle",regex:/^={1,5}\s+\S.*$/,next:"start"},{token:"otherBlock",regex:/^(?:\*{2,}|_{2,})\s*$/,next:"start"},{token:"optionalTitle",regex:/^\.[^.\s].+$/,next:"start"}],listStart:[{token:"keyword",regex:/^\s*(?:\d+\.|[a-zA-Z]\.|[ixvmIXVM]+\)|\*{1,5}|-|\.{1,5})\s/,next:"listText"},{token:"meta.tag",regex:/^.+(?::{2,4}|;;)(?: |$)/,next:"listText"},{token:"support.function.list.callout",regex:/^(?:<\d+>|\d+>|>) /,next:"text"},{token:"keyword",regex:/^\+\s*$/,next:"start"}],text:[{token:["link","variable.language"],regex:/((?:https?:\/\/|ftp:\/\/|file:\/\/|mailto:|callto:)[^\s\[]+)(\[.*?\])/},{token:"link",regex:/(?:https?:\/\/|ftp:\/\/|file:\/\/|mailto:|callto:)[^\s\[]+/},{token:"link",regex:/\b[\w\.\/\-]+@[\w\.\/\-]+\b/},{include:"macros"},{include:"paragraphEnd"},{token:"literal",regex:/\+{3,}/,next:"smallPassthrough"},{token:"escape",regex:/\((?:C|TM|R)\)|\.{3}|->|<-|=>|<=|&#(?:\d+|x[a-fA-F\d]+);|(?: |^)--(?=\s+\S)/},{token:"escape",regex:/\\[_*'`+#]|\\{2}[_*'`+#]{2}/},{token:"keyword",regex:/\s\+$/},{token:"text",regex:"[a-zA-Z¡-￿]+\\b"},{token:["keyword","string","keyword"],regex:/(<<[\w\d\-$]+,)(.*?)(>>|$)/},{token:"keyword",regex:/<<[\w\d\-$]+,?|>>/},{token:"constant.character",regex:/\({2,3}.*?\){2,3}/},{token:"keyword",regex:/\[\[.+?\]\]/},{token:"support",regex:/^\[{3}[\w\d =\-]+\]{3}/},{include:"quotes"},{token:"empty",regex:/^\s*$/,next:"start"}],listText:[{include:"listStart"},{include:"text"}],indentedBlock:[{token:"literal",regex:/^[\s\w].+$/,next:"indentedBlock"},{token:"literal",regex:"",next:"start"}],listingBlock:[{token:"literal",regex:/^\.{4,}\s*$/,next:"dissallowDelimitedBlock"},{token:"constant.numeric",regex:"<\\d+>"},{token:"literal",regex:"[^<]+"},{token:"literal",regex:"<"}],literalBlock:[{token:"literal",regex:/^-{4,}\s*$/,next:"dissallowDelimitedBlock"},{token:"constant.numeric",regex:"<\\d+>"},{token:"literal",regex:"[^<]+"},{token:"literal",regex:"<"}],passthroughBlock:[{token:"literal",regex:/^\+{4,}\s*$/,next:"dissallowDelimitedBlock"},{token:"literal",regex:"[a-zA-Z¡-￿]+\\b|\\d+"},{include:"macros"},{token:"literal",regex:"."}],smallPassthrough:[{token:"literal",regex:/[+]{3,}/,next:"dissallowDelimitedBlock"},{token:"literal",regex:/^\s*$/,next:"dissallowDelimitedBlock"},{token:"literal",regex:"[a-zA-Z¡-￿]+\\b|\\d+"},{include:"macros"}],commentBlock:[{token:"doc.comment",regex:/^\/{4,}\s*$/,next:"dissallowDelimitedBlock"},{token:"doc.comment",regex:"^.*$"}],tableBlock:[{token:"tableBlock",regex:/^\s*\|={3,}\s*$/,next:"dissallowDelimitedBlock"},{token:"tableBlock",regex:/^\s*!={3,}\s*$/,next:"innerTableBlock"},{token:"tableBlock",regex:/\|/},{include:"text",noEscape:!0}],innerTableBlock:[{token:"tableBlock",regex:/^\s*!={3,}\s*$/,next:"tableBlock"},{token:"tableBlock",regex:/^\s*|={3,}\s*$/,next:"dissallowDelimitedBlock"},{token:"tableBlock",regex:/!/}],macros:[{token:"macro",regex:/{[\w\-$]+}/},{token:["text","string","text","constant.character","text"],regex:/({)([\w\-$]+)(:)?(.+)?(})/},{token:["text","markup.list.macro","keyword","string"],regex:/(\w+)(footnote(?:ref)?::?)([^\s\[]+)?(\[.*?\])?/},{token:["markup.list.macro","keyword","string"],regex:/([a-zA-Z\-][\w\.\/\-]*::?)([^\s\[]+)(\[.*?\])?/},{token:["markup.list.macro","keyword"],regex:/([a-zA-Z\-][\w\.\/\-]+::?)(\[.*?\])/},{token:"keyword",regex:/^:.+?:(?= |$)/}],quotes:[{token:"string.italic",regex:/__[^_\s].*?__/},{token:"string.italic",regex:quoteRule("_")},{token:"keyword.bold",regex:/\*\*[^*\s].*?\*\*/},{token:"keyword.bold",regex:quoteRule("\\*")},{token:"literal",regex:quoteRule("\\+")},{token:"literal",regex:/\+\+[^+\s].*?\+\+/},{token:"literal",regex:/\$\$.+?\$\$/},{token:"literal",regex:quoteRule("`")},{token:"keyword",regex:quoteRule("^")},{token:"keyword",regex:quoteRule("~")},{token:"keyword",regex:/##?/},{token:"keyword",regex:/(?:\B|^)``|\b''/}]};var tokenMap={macro:"constant.character",tableBlock:"doc.comment",titleUnderline:"markup.heading",singleLineTitle:"markup.heading",pageBreak:"string",option:"string.regexp",otherBlock:"markup.list",literal:"support.function",optionalTitle:"constant.numeric",escape:"constant.language.escape",link:"markup.underline.list"};for(var state in this.$rules)for(var stateRules=this.$rules[state],i=stateRules.length;i--;){var rule=stateRules[i];if(rule.include||"string"==typeof rule){var args=[i,1].concat(this.$rules[rule.include||rule]);rule.noEscape&&(args=args.filter((function(x){return!x.next}))),stateRules.splice.apply(stateRules,args)}else rule.token in tokenMap&&(rule.token=tokenMap[rule.token])}};oop.inherits(AsciidocHighlightRules,TextHighlightRules),exports.AsciidocHighlightRules=AsciidocHighlightRules})),ace.define("ace/mode/folding/asciidoc",["require","exports","module","ace/lib/oop","ace/mode/folding/fold_mode","ace/range"],(function(require,exports,module){"use strict";var oop=require("../../lib/oop"),BaseFoldMode=require("./fold_mode").FoldMode,Range=require("../../range").Range,FoldMode=exports.FoldMode=function(){};oop.inherits(FoldMode,BaseFoldMode),function(){this.foldingStartMarker=/^(?:\|={10,}|[\.\/=\-~^+]{4,}\s*$|={1,5} )/,this.singleLineHeadingRe=/^={1,5}(?=\s+\S)/,this.getFoldWidget=function(session,foldStyle,row){var line=session.getLine(row);return this.foldingStartMarker.test(line)?"="==line[0]?this.singleLineHeadingRe.test(line)?"start":session.getLine(row-1).length!=session.getLine(row).length?"":"start":"dissallowDelimitedBlock"==session.bgTokenizer.getState(row)?"end":"start":""},this.getFoldWidgetRange=function(session,foldStyle,row){var line=session.getLine(row),startColumn=line.length,maxRow=session.getLength(),startRow=row,endRow=row;if(line.match(this.foldingStartMarker)){var token,levels=["=","-","~","^","+"],singleLineHeadingRe=this.singleLineHeadingRe;if("markup.heading"==getTokenType(row)){for(var startHeadingLevel=getLevel();++row<maxRow;){if("markup.heading"==getTokenType(row))if(getLevel()<=startHeadingLevel)break}if((endRow=token&&token.value.match(this.singleLineHeadingRe)?row-1:row-2)>startRow)for(;endRow>startRow&&(!getTokenType(endRow)||"["==token.value[0]);)endRow--;if(endRow>startRow){var endColumn=session.getLine(endRow).length;return new Range(startRow,startColumn,endRow,endColumn)}}else{if("dissallowDelimitedBlock"==session.bgTokenizer.getState(row)){for(;row-- >0&&-1!=session.bgTokenizer.getState(row).lastIndexOf("Block"););if((endRow=row+1)<startRow){endColumn=session.getLine(row).length;return new Range(endRow,5,startRow,startColumn-5)}}else{for(;++row<maxRow&&"dissallowDelimitedBlock"!=session.bgTokenizer.getState(row););if((endRow=row)>startRow){endColumn=session.getLine(row).length;return new Range(startRow,5,endRow,endColumn-5)}}}}function getTokenType(row){return(token=session.getTokens(row)[0])&&token.type}function getLevel(){var match=token.value.match(singleLineHeadingRe);if(match)return match[0].length;var level=levels.indexOf(token.value[0])+1;return 1==level&&session.getLine(row-1).length!=session.getLine(row).length?1/0:level}}}.call(FoldMode.prototype)})),ace.define("ace/mode/asciidoc",["require","exports","module","ace/lib/oop","ace/mode/text","ace/mode/asciidoc_highlight_rules","ace/mode/folding/asciidoc"],(function(require,exports,module){"use strict";var oop=require("../lib/oop"),TextMode=require("./text").Mode,AsciidocHighlightRules=require("./asciidoc_highlight_rules").AsciidocHighlightRules,AsciidocFoldMode=require("./folding/asciidoc").FoldMode,Mode=function(){this.HighlightRules=AsciidocHighlightRules,this.foldingRules=new AsciidocFoldMode};oop.inherits(Mode,TextMode),function(){this.type="text",this.getNextLineIndent=function(state,line,tab){if("listblock"==state){var match=/^((?:.+)?)([-+*][ ]+)/.exec(line);return match?new Array(match[1].length+1).join(" ")+match[2]:""}return this.$getIndent(line)},this.$id="ace/mode/asciidoc"}.call(Mode.prototype),exports.Mode=Mode})),ace.require(["ace/mode/asciidoc"],(function(m){"object"==typeof module&&"object"==typeof exports&&module&&(module.exports=m)}));