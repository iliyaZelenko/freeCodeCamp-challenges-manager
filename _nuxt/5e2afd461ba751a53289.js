(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{662:function(e,t,n){"use strict";n.r(t);var r,o,c,d,f,l,h,m,v,k,C,w,_,y,E,x,S,I,A,T=function(){function e(e){var t=this;this._defaults=e,this._worker=null,this._idleCheckInterval=setInterval(function(){return t._checkIfIdle()},3e4),this._lastUsedTime=0,this._configChangeListener=this._defaults.onDidChange(function(){return t._stopWorker()})}return e.prototype._stopWorker=function(){this._worker&&(this._worker.dispose(),this._worker=null),this._client=null},e.prototype.dispose=function(){clearInterval(this._idleCheckInterval),this._configChangeListener.dispose(),this._stopWorker()},e.prototype._checkIfIdle=function(){this._worker&&(Date.now()-this._lastUsedTime>12e4&&this._stopWorker())},e.prototype._getClient=function(){return this._lastUsedTime=Date.now(),this._client||(this._worker=monaco.editor.createWebWorker({moduleId:"vs/language/json/jsonWorker",label:this._defaults.languageId,createData:{languageSettings:this._defaults.diagnosticsOptions,languageId:this._defaults.languageId,enableSchemaRequest:this._defaults.diagnosticsOptions.enableSchemaRequest}}),this._client=this._worker.getProxy()),this._client},e.prototype.getLanguageServiceWorker=function(){for(var e,t=this,n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return this._getClient().then(function(t){e=t}).then(function(e){return t._worker.withSyncedResources(n)}).then(function(t){return e})},e}();!function(e){e.create=function(line,e){return{line:line,character:e}},e.is=function(e){var t=e;return ie.objectLiteral(t)&&ie.number(t.line)&&ie.number(t.character)}}(r||(r={})),function(e){e.create=function(e,t,n,o){if(ie.number(e)&&ie.number(t)&&ie.number(n)&&ie.number(o))return{start:r.create(e,t),end:r.create(n,o)};if(r.is(e)&&r.is(t))return{start:e,end:t};throw new Error("Range#create called with invalid arguments["+e+", "+t+", "+n+", "+o+"]")},e.is=function(e){var t=e;return ie.objectLiteral(t)&&r.is(t.start)&&r.is(t.end)}}(o||(o={})),function(e){e.create=function(e,t){return{uri:e,range:t}},e.is=function(e){var t=e;return ie.defined(t)&&o.is(t.range)&&(ie.string(t.uri)||ie.undefined(t.uri))}}(c||(c={})),function(e){e.create=function(e,t,n,r){return{targetUri:e,targetRange:t,targetSelectionRange:n,originSelectionRange:r}},e.is=function(e){var t=e;return ie.defined(t)&&o.is(t.targetRange)&&ie.string(t.targetUri)&&(o.is(t.targetSelectionRange)||ie.undefined(t.targetSelectionRange))&&(o.is(t.originSelectionRange)||ie.undefined(t.originSelectionRange))}}(d||(d={})),function(e){e.create=function(e,t,n,r){return{red:e,green:t,blue:n,alpha:r}},e.is=function(e){var t=e;return ie.number(t.red)&&ie.number(t.green)&&ie.number(t.blue)&&ie.number(t.alpha)}}(f||(f={})),function(e){e.create=function(e,t){return{range:e,color:t}},e.is=function(e){var t=e;return o.is(t.range)&&f.is(t.color)}}(l||(l={})),function(e){e.create=function(label,e,t){return{label:label,textEdit:e,additionalTextEdits:t}},e.is=function(e){var t=e;return ie.string(t.label)&&(ie.undefined(t.textEdit)||y.is(t))&&(ie.undefined(t.additionalTextEdits)||ie.typedArray(t.additionalTextEdits,y.is))}}(h||(h={})),function(e){e.Comment="comment",e.Imports="imports",e.Region="region"}(m||(m={})),function(e){e.create=function(e,t,n,r,o){var c={startLine:e,endLine:t};return ie.defined(n)&&(c.startCharacter=n),ie.defined(r)&&(c.endCharacter=r),ie.defined(o)&&(c.kind=o),c},e.is=function(e){var t=e;return ie.number(t.startLine)&&ie.number(t.startLine)&&(ie.undefined(t.startCharacter)||ie.number(t.startCharacter))&&(ie.undefined(t.endCharacter)||ie.number(t.endCharacter))&&(ie.undefined(t.kind)||ie.string(t.kind))}}(v||(v={})),function(e){e.create=function(e,t){return{location:e,message:t}},e.is=function(e){var t=e;return ie.defined(t)&&c.is(t.location)&&ie.string(t.message)}}(k||(k={})),function(e){e.Error=1,e.Warning=2,e.Information=3,e.Hint=4}(C||(C={})),function(e){e.create=function(e,t,n,code,source,r){var o={range:e,message:t};return ie.defined(n)&&(o.severity=n),ie.defined(code)&&(o.code=code),ie.defined(source)&&(o.source=source),ie.defined(r)&&(o.relatedInformation=r),o},e.is=function(e){var t=e;return ie.defined(t)&&o.is(t.range)&&ie.string(t.message)&&(ie.number(t.severity)||ie.undefined(t.severity))&&(ie.number(t.code)||ie.string(t.code)||ie.undefined(t.code))&&(ie.string(t.source)||ie.undefined(t.source))&&(ie.undefined(t.relatedInformation)||ie.typedArray(t.relatedInformation,k.is))}}(w||(w={})),function(e){e.create=function(title,e){for(var t=[],n=2;n<arguments.length;n++)t[n-2]=arguments[n];var r={title:title,command:e};return ie.defined(t)&&t.length>0&&(r.arguments=t),r},e.is=function(e){var t=e;return ie.defined(t)&&ie.string(t.title)&&ie.string(t.command)}}(_||(_={})),function(e){e.replace=function(e,t){return{range:e,newText:t}},e.insert=function(e,t){return{range:{start:e,end:e},newText:t}},e.del=function(e){return{range:e,newText:""}},e.is=function(e){var t=e;return ie.objectLiteral(t)&&ie.string(t.newText)&&o.is(t.range)}}(y||(y={})),function(e){e.create=function(e,t){return{textDocument:e,edits:t}},e.is=function(e){var t=e;return ie.defined(t)&&P.is(t.textDocument)&&Array.isArray(t.edits)}}(E||(E={})),function(e){e.create=function(e,t){var n={kind:"create",uri:e};return void 0===t||void 0===t.overwrite&&void 0===t.ignoreIfExists||(n.options=t),n},e.is=function(e){var t=e;return t&&"create"===t.kind&&ie.string(t.uri)&&(void 0===t.options||(void 0===t.options.overwrite||ie.boolean(t.options.overwrite))&&(void 0===t.options.ignoreIfExists||ie.boolean(t.options.ignoreIfExists)))}}(x||(x={})),function(e){e.create=function(e,t,n){var r={kind:"rename",oldUri:e,newUri:t};return void 0===n||void 0===n.overwrite&&void 0===n.ignoreIfExists||(r.options=n),r},e.is=function(e){var t=e;return t&&"rename"===t.kind&&ie.string(t.oldUri)&&ie.string(t.newUri)&&(void 0===t.options||(void 0===t.options.overwrite||ie.boolean(t.options.overwrite))&&(void 0===t.options.ignoreIfExists||ie.boolean(t.options.ignoreIfExists)))}}(S||(S={})),function(e){e.create=function(e,t){var n={kind:"delete",uri:e};return void 0===t||void 0===t.recursive&&void 0===t.ignoreIfNotExists||(n.options=t),n},e.is=function(e){var t=e;return t&&"delete"===t.kind&&ie.string(t.uri)&&(void 0===t.options||(void 0===t.options.recursive||ie.boolean(t.options.recursive))&&(void 0===t.options.ignoreIfNotExists||ie.boolean(t.options.ignoreIfNotExists)))}}(I||(I={})),function(e){e.is=function(e){var t=e;return t&&(void 0!==t.changes||void 0!==t.documentChanges)&&(void 0===t.documentChanges||t.documentChanges.every(function(e){return ie.string(e.kind)?x.is(e)||S.is(e)||I.is(e):E.is(e)}))}}(A||(A={}));var M,P,R,j,F,D,L,O,W,N,U,V,K,z,H,B,J,$=function(){function e(e){this.edits=e}return e.prototype.insert=function(e,t){this.edits.push(y.insert(e,t))},e.prototype.replace=function(e,t){this.edits.push(y.replace(e,t))},e.prototype.delete=function(e){this.edits.push(y.del(e))},e.prototype.add=function(e){this.edits.push(e)},e.prototype.all=function(){return this.edits},e.prototype.clear=function(){this.edits.splice(0,this.edits.length)},e}();!function(){function e(e){var t=this;this._textEditChanges=Object.create(null),e&&(this._workspaceEdit=e,e.documentChanges?e.documentChanges.forEach(function(e){if(E.is(e)){var n=new $(e.edits);t._textEditChanges[e.textDocument.uri]=n}}):e.changes&&Object.keys(e.changes).forEach(function(n){var r=new $(e.changes[n]);t._textEditChanges[n]=r}))}Object.defineProperty(e.prototype,"edit",{get:function(){return this._workspaceEdit},enumerable:!0,configurable:!0}),e.prototype.getTextEditChange=function(e){if(P.is(e)){if(this._workspaceEdit||(this._workspaceEdit={documentChanges:[]}),!this._workspaceEdit.documentChanges)throw new Error("Workspace edit is not configured for document changes.");var t=e;if(!(r=this._textEditChanges[t.uri])){var n={textDocument:t,edits:o=[]};this._workspaceEdit.documentChanges.push(n),r=new $(o),this._textEditChanges[t.uri]=r}return r}if(this._workspaceEdit||(this._workspaceEdit={changes:Object.create(null)}),!this._workspaceEdit.changes)throw new Error("Workspace edit is not configured for normal text edit changes.");var r;if(!(r=this._textEditChanges[e])){var o=[];this._workspaceEdit.changes[e]=o,r=new $(o),this._textEditChanges[e]=r}return r},e.prototype.createFile=function(e,t){this.checkDocumentChanges(),this._workspaceEdit.documentChanges.push(x.create(e,t))},e.prototype.renameFile=function(e,t,n){this.checkDocumentChanges(),this._workspaceEdit.documentChanges.push(S.create(e,t,n))},e.prototype.deleteFile=function(e,t){this.checkDocumentChanges(),this._workspaceEdit.documentChanges.push(I.create(e,t))},e.prototype.checkDocumentChanges=function(){if(!this._workspaceEdit||!this._workspaceEdit.documentChanges)throw new Error("Workspace edit is not configured for document changes.")}}();!function(e){e.create=function(e){return{uri:e}},e.is=function(e){var t=e;return ie.defined(t)&&ie.string(t.uri)}}(M||(M={})),function(e){e.create=function(e,t){return{uri:e,version:t}},e.is=function(e){var t=e;return ie.defined(t)&&ie.string(t.uri)&&(null===t.version||ie.number(t.version))}}(P||(P={})),function(e){e.create=function(e,t,n,text){return{uri:e,languageId:t,version:n,text:text}},e.is=function(e){var t=e;return ie.defined(t)&&ie.string(t.uri)&&ie.string(t.languageId)&&ie.number(t.version)&&ie.string(t.text)}}(R||(R={})),function(e){e.PlainText="plaintext",e.Markdown="markdown"}(j||(j={})),function(e){e.is=function(t){var n=t;return n===e.PlainText||n===e.Markdown}}(j||(j={})),function(e){e.is=function(e){var t=e;return ie.objectLiteral(e)&&j.is(t.kind)&&ie.string(t.value)}}(F||(F={})),function(e){e.Text=1,e.Method=2,e.Function=3,e.Constructor=4,e.Field=5,e.Variable=6,e.Class=7,e.Interface=8,e.Module=9,e.Property=10,e.Unit=11,e.Value=12,e.Enum=13,e.Keyword=14,e.Snippet=15,e.Color=16,e.File=17,e.Reference=18,e.Folder=19,e.EnumMember=20,e.Constant=21,e.Struct=22,e.Event=23,e.Operator=24,e.TypeParameter=25}(D||(D={})),function(e){e.PlainText=1,e.Snippet=2}(L||(L={})),function(e){e.create=function(label){return{label:label}}}(O||(O={})),function(e){e.create=function(e,t){return{items:e||[],isIncomplete:!!t}}}(W||(W={})),function(e){e.fromPlainText=function(e){return e.replace(/[\\`*_{}[\]()#+\-.!]/g,"\\$&")},e.is=function(e){var t=e;return ie.string(t)||ie.objectLiteral(t)&&ie.string(t.language)&&ie.string(t.value)}}(N||(N={})),function(e){e.is=function(e){var t=e;return!!t&&ie.objectLiteral(t)&&(F.is(t.contents)||N.is(t.contents)||ie.typedArray(t.contents,N.is))&&(void 0===e.range||o.is(e.range))}}(U||(U={})),function(e){e.create=function(label,e){return e?{label:label,documentation:e}:{label:label}}}(V||(V={})),function(e){e.create=function(label,e){for(var t=[],n=2;n<arguments.length;n++)t[n-2]=arguments[n];var r={label:label};return ie.defined(e)&&(r.documentation=e),ie.defined(t)?r.parameters=t:r.parameters=[],r}}(K||(K={})),function(e){e.Text=1,e.Read=2,e.Write=3}(z||(z={})),function(e){e.create=function(e,t){var n={range:e};return ie.number(t)&&(n.kind=t),n}}(H||(H={})),function(e){e.File=1,e.Module=2,e.Namespace=3,e.Package=4,e.Class=5,e.Method=6,e.Property=7,e.Field=8,e.Constructor=9,e.Enum=10,e.Interface=11,e.Function=12,e.Variable=13,e.Constant=14,e.String=15,e.Number=16,e.Boolean=17,e.Array=18,e.Object=19,e.Key=20,e.Null=21,e.EnumMember=22,e.Struct=23,e.Event=24,e.Operator=25,e.TypeParameter=26}(B||(B={})),function(e){e.create=function(e,t,n,r,o){var c={name:e,kind:t,location:{uri:r,range:n}};return o&&(c.containerName=o),c}}(J||(J={}));var Q,G,X,Y,Z,ee=function(){return function(){}}();!function(e){e.create=function(e,t,n,r,o,c){var d={name:e,detail:t,kind:n,range:r,selectionRange:o};return void 0!==c&&(d.children=c),d},e.is=function(e){var t=e;return t&&ie.string(t.name)&&ie.number(t.kind)&&o.is(t.range)&&o.is(t.selectionRange)&&(void 0===t.detail||ie.string(t.detail))&&(void 0===t.deprecated||ie.boolean(t.deprecated))&&(void 0===t.children||Array.isArray(t.children))}}(ee||(ee={})),function(e){e.QuickFix="quickfix",e.Refactor="refactor",e.RefactorExtract="refactor.extract",e.RefactorInline="refactor.inline",e.RefactorRewrite="refactor.rewrite",e.Source="source",e.SourceOrganizeImports="source.organizeImports"}(Q||(Q={})),function(e){e.create=function(e,t){var n={diagnostics:e};return null!=t&&(n.only=t),n},e.is=function(e){var t=e;return ie.defined(t)&&ie.typedArray(t.diagnostics,w.is)&&(void 0===t.only||ie.typedArray(t.only,ie.string))}}(G||(G={})),function(e){e.create=function(title,e,t){var n={title:title};return _.is(e)?n.command=e:n.edit=e,void 0!==t&&(n.kind=t),n},e.is=function(e){var t=e;return t&&ie.string(t.title)&&(void 0===t.diagnostics||ie.typedArray(t.diagnostics,w.is))&&(void 0===t.kind||ie.string(t.kind))&&(void 0!==t.edit||void 0!==t.command)&&(void 0===t.command||_.is(t.command))&&(void 0===t.edit||A.is(t.edit))}}(X||(X={})),function(e){e.create=function(e,data){var t={range:e};return ie.defined(data)&&(t.data=data),t},e.is=function(e){var t=e;return ie.defined(t)&&o.is(t.range)&&(ie.undefined(t.command)||_.is(t.command))}}(Y||(Y={})),function(e){e.create=function(e,t){return{tabSize:e,insertSpaces:t}},e.is=function(e){var t=e;return ie.defined(t)&&ie.number(t.tabSize)&&ie.boolean(t.insertSpaces)}}(Z||(Z={}));var te=function(){return function(){}}();!function(e){e.create=function(e,t,data){return{range:e,target:t,data:data}},e.is=function(e){var t=e;return ie.defined(t)&&o.is(t.range)&&(ie.undefined(t.target)||ie.string(t.target))}}(te||(te={}));var ne,re;!function(e){e.create=function(e,t,n,content){return new oe(e,t,n,content)},e.is=function(e){var t=e;return!!(ie.defined(t)&&ie.string(t.uri)&&(ie.undefined(t.languageId)||ie.string(t.languageId))&&ie.number(t.lineCount)&&ie.func(t.getText)&&ie.func(t.positionAt)&&ie.func(t.offsetAt))},e.applyEdits=function(e,t){for(var text=e.getText(),n=function e(data,t){if(data.length<=1)return data;var p=data.length/2|0,n=data.slice(0,p),r=data.slice(p);e(n,t),e(r,t);for(var o=0,c=0,i=0;o<n.length&&c<r.length;){var d=t(n[o],r[c]);data[i++]=d<=0?n[o++]:r[c++]}for(;o<n.length;)data[i++]=n[o++];for(;c<r.length;)data[i++]=r[c++];return data}(t,function(a,b){var e=a.range.start.line-b.range.start.line;return 0===e?a.range.start.character-b.range.start.character:e}),r=text.length,i=n.length-1;i>=0;i--){var o=n[i],c=e.offsetAt(o.range.start),d=e.offsetAt(o.range.end);if(!(d<=r))throw new Error("Overlapping edit");text=text.substring(0,c)+o.newText+text.substring(d,text.length),r=c}return text}}(ne||(ne={})),function(e){e.Manual=1,e.AfterDelay=2,e.FocusOut=3}(re||(re={}));var ie,oe=function(){function e(e,t,n,content){this._uri=e,this._languageId=t,this._version=n,this._content=content,this._lineOffsets=null}return Object.defineProperty(e.prototype,"uri",{get:function(){return this._uri},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"languageId",{get:function(){return this._languageId},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"version",{get:function(){return this._version},enumerable:!0,configurable:!0}),e.prototype.getText=function(e){if(e){var t=this.offsetAt(e.start),n=this.offsetAt(e.end);return this._content.substring(t,n)}return this._content},e.prototype.update=function(e,t){this._content=e.text,this._version=t,this._lineOffsets=null},e.prototype.getLineOffsets=function(){if(null===this._lineOffsets){for(var e=[],text=this._content,t=!0,i=0;i<text.length;i++){t&&(e.push(i),t=!1);var n=text.charAt(i);t="\r"===n||"\n"===n,"\r"===n&&i+1<text.length&&"\n"===text.charAt(i+1)&&i++}t&&text.length>0&&e.push(text.length),this._lineOffsets=e}return this._lineOffsets},e.prototype.positionAt=function(e){e=Math.max(Math.min(e,this._content.length),0);var t=this.getLineOffsets(),n=0,o=t.length;if(0===o)return r.create(0,e);for(;n<o;){var c=Math.floor((n+o)/2);t[c]>e?o=c:n=c+1}var line=n-1;return r.create(line,e-t[line])},e.prototype.offsetAt=function(e){var t=this.getLineOffsets();if(e.line>=t.length)return this._content.length;if(e.line<0)return 0;var n=t[e.line],r=e.line+1<t.length?t[e.line+1]:this._content.length;return Math.max(Math.min(n+e.character,r),n)},Object.defineProperty(e.prototype,"lineCount",{get:function(){return this.getLineOffsets().length},enumerable:!0,configurable:!0}),e}();!function(e){var t=Object.prototype.toString;e.defined=function(e){return void 0!==e},e.undefined=function(e){return void 0===e},e.boolean=function(e){return!0===e||!1===e},e.string=function(e){return"[object String]"===t.call(e)},e.number=function(e){return"[object Number]"===t.call(e)},e.func=function(e){return"[object Function]"===t.call(e)},e.objectLiteral=function(e){return null!==e&&"object"==typeof e},e.typedArray=function(e,t){return Array.isArray(e)&&e.every(t)}}(ie||(ie={}));monaco.Uri;var ae=monaco.Range,se=function(){function e(e,t,n){var r=this;this._languageId=e,this._worker=t,this._disposables=[],this._listener=Object.create(null);var o=function(e){var t,n=e.getModeId();n===r._languageId&&(r._listener[e.uri.toString()]=e.onDidChangeContent(function(){clearTimeout(t),t=setTimeout(function(){return r._doValidate(e.uri,n)},500)}),r._doValidate(e.uri,n))},c=function(e){monaco.editor.setModelMarkers(e,r._languageId,[]);var t=e.uri.toString(),n=r._listener[t];n&&(n.dispose(),delete r._listener[t])};this._disposables.push(monaco.editor.onDidCreateModel(o)),this._disposables.push(monaco.editor.onWillDisposeModel(function(e){c(e),r._resetSchema(e.uri)})),this._disposables.push(monaco.editor.onDidChangeModelLanguage(function(e){c(e.model),o(e.model),r._resetSchema(e.model.uri)})),this._disposables.push(n.onDidChange(function(e){monaco.editor.getModels().forEach(function(e){e.getModeId()===r._languageId&&(c(e),o(e))})})),this._disposables.push({dispose:function(){for(var e in monaco.editor.getModels().forEach(c),r._listener)r._listener[e].dispose()}}),monaco.editor.getModels().forEach(o)}return e.prototype.dispose=function(){this._disposables.forEach(function(e){return e&&e.dispose()}),this._disposables=[]},e.prototype._resetSchema=function(e){this._worker().then(function(t){t.resetSchema(e.toString())})},e.prototype._doValidate=function(e,t){this._worker(e).then(function(n){return n.doValidation(e.toString()).then(function(n){var r=n.map(function(e){return code="number"==typeof(t=e).code?String(t.code):t.code,{severity:ue(t.severity),startLineNumber:t.range.start.line+1,startColumn:t.range.start.character+1,endLineNumber:t.range.end.line+1,endColumn:t.range.end.character+1,message:t.message,code:code,source:t.source};var t,code}),o=monaco.editor.getModel(e);o.getModeId()===t&&monaco.editor.setModelMarkers(o,t,r)})}).then(void 0,function(e){console.error(e)})},e}();function ue(e){switch(e){case C.Error:return monaco.MarkerSeverity.Error;case C.Warning:return monaco.MarkerSeverity.Warning;case C.Information:return monaco.MarkerSeverity.Info;case C.Hint:return monaco.MarkerSeverity.Hint;default:return monaco.MarkerSeverity.Info}}function ce(e){if(e)return{character:e.column-1,line:e.lineNumber-1}}function de(e){if(e)return{start:{line:e.startLineNumber-1,character:e.startColumn-1},end:{line:e.endLineNumber-1,character:e.endColumn-1}}}function fe(e){if(e)return new ae(e.start.line+1,e.start.character+1,e.end.line+1,e.end.character+1)}function le(e){var t=monaco.languages.CompletionItemKind;switch(e){case D.Text:return t.Text;case D.Method:return t.Method;case D.Function:return t.Function;case D.Constructor:return t.Constructor;case D.Field:return t.Field;case D.Variable:return t.Variable;case D.Class:return t.Class;case D.Interface:return t.Interface;case D.Module:return t.Module;case D.Property:return t.Property;case D.Unit:return t.Unit;case D.Value:return t.Value;case D.Enum:return t.Enum;case D.Keyword:return t.Keyword;case D.Snippet:return t.Snippet;case D.Color:return t.Color;case D.File:return t.File;case D.Reference:return t.Reference}return t.Property}function ge(e){if(e)return{range:fe(e.range),text:e.newText}}var he=function(){function e(e){this._worker=e}return Object.defineProperty(e.prototype,"triggerCharacters",{get:function(){return[" ",":"]},enumerable:!0,configurable:!0}),e.prototype.provideCompletionItems=function(e,t,n,r){var o=e.uri;return this._worker(o).then(function(e){return e.doComplete(o.toString(),ce(t))}).then(function(n){if(n){var r=e.getWordUntilPosition(t),o=new ae(t.lineNumber,r.startColumn,t.lineNumber,r.endColumn),c=n.items.map(function(e){var t={label:e.label,insertText:e.insertText||e.label,sortText:e.sortText,filterText:e.filterText,documentation:e.documentation,detail:e.detail,range:o,kind:le(e.kind)};return e.textEdit&&(t.range=fe(e.textEdit.range),t.insertText=e.textEdit.newText),e.additionalTextEdits&&(t.additionalTextEdits=e.additionalTextEdits.map(ge)),e.insertTextFormat===L.Snippet&&(t.insertTextRules=monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet),t});return{isIncomplete:n.isIncomplete,suggestions:c}}})},e}();function pe(e){return"string"==typeof e?{value:e}:(t=e)&&"object"==typeof t&&"string"==typeof t.kind?"plaintext"===e.kind?{value:e.value.replace(/[\\`*_{}[\]()#+\-.!]/g,"\\$&")}:{value:e.value}:{value:"```"+e.language+"\n"+e.value+"\n```\n"};var t}function me(e){if(e)return Array.isArray(e)?e.map(pe):[pe(e)]}var ve=function(){function e(e){this._worker=e}return e.prototype.provideHover=function(e,t,n){var r=e.uri;return this._worker(r).then(function(e){return e.doHover(r.toString(),ce(t))}).then(function(e){if(e)return{range:fe(e.range),contents:me(e.contents)}})},e}();function be(e){var t=monaco.languages.SymbolKind;switch(e){case B.File:return t.Array;case B.Module:return t.Module;case B.Namespace:return t.Namespace;case B.Package:return t.Package;case B.Class:return t.Class;case B.Method:return t.Method;case B.Property:return t.Property;case B.Field:return t.Field;case B.Constructor:return t.Constructor;case B.Enum:return t.Enum;case B.Interface:return t.Interface;case B.Function:return t.Function;case B.Variable:return t.Variable;case B.Constant:return t.Constant;case B.String:return t.String;case B.Number:return t.Number;case B.Boolean:return t.Boolean;case B.Array:return t.Array}return t.Function}var ke=function(){function e(e){this._worker=e}return e.prototype.provideDocumentSymbols=function(e,t){var n=e.uri;return this._worker(n).then(function(e){return e.findDocumentSymbols(n.toString())}).then(function(e){if(e)return e.map(function(e){return{name:e.name,detail:"",containerName:e.containerName,kind:be(e.kind),range:fe(e.location.range),selectionRange:fe(e.location.range)}})})},e}();function Ce(e){return{tabSize:e.tabSize,insertSpaces:e.insertSpaces}}var we,_e=function(){function e(e){this._worker=e}return e.prototype.provideDocumentFormattingEdits=function(e,t,n){var r=e.uri;return this._worker(r).then(function(e){return e.format(r.toString(),null,Ce(t)).then(function(e){if(e&&0!==e.length)return e.map(ge)})})},e}(),ye=function(){function e(e){this._worker=e}return e.prototype.provideDocumentRangeFormattingEdits=function(e,t,n,r){var o=e.uri;return this._worker(o).then(function(e){return e.format(o.toString(),de(t),Ce(n)).then(function(e){if(e&&0!==e.length)return e.map(ge)})})},e}(),Ee=function(){function e(e){this._worker=e}return e.prototype.provideDocumentColors=function(e,t){var n=e.uri;return this._worker(n).then(function(e){return e.findDocumentColors(n.toString())}).then(function(e){if(e)return e.map(function(e){return{color:e.color,range:fe(e.range)}})})},e.prototype.provideColorPresentations=function(e,t,n){var r=e.uri;return this._worker(r).then(function(e){return e.getColorPresentations(r.toString(),t.color,de(t.range))}).then(function(e){if(e)return e.map(function(e){var t={label:e.label};return e.textEdit&&(t.textEdit=ge(e.textEdit)),e.additionalTextEdits&&(t.additionalTextEdits=e.additionalTextEdits.map(ge)),t})})},e}(),xe=function(){function e(e){this._worker=e}return e.prototype.provideFoldingRanges=function(e,t,n){var r=e.uri;return this._worker(r).then(function(e){return e.provideFoldingRanges(r.toString(),t)}).then(function(e){if(e)return e.map(function(e){var t={start:e.startLine+1,end:e.endLine+1};return void 0!==e.kind&&(t.kind=function(e){switch(e){case m.Comment:return monaco.languages.FoldingRangeKind.Comment;case m.Imports:return monaco.languages.FoldingRangeKind.Imports;case m.Region:return monaco.languages.FoldingRangeKind.Region}return}(e.kind)),t})})},e}();function Se(text,e){void 0===e&&(e=!1);var t=0,n=text.length,r="",o=0,c=16,d=0;function f(e,n){for(var r=0,o=0;r<e||!n;){var c=text.charCodeAt(t);if(c>=48&&c<=57)o=16*o+c-48;else if(c>=65&&c<=70)o=16*o+c-65+10;else{if(!(c>=97&&c<=102))break;o=16*o+c-97+10}t++,r++}return r<e&&(o=-1),o}function l(){if(r="",d=0,o=t,t>=n)return o=n,c=17;var code=text.charCodeAt(t);if(Ie(code)){do{t++,r+=String.fromCharCode(code),code=text.charCodeAt(t)}while(Ie(code));return c=15}if(Ae(code))return t++,r+=String.fromCharCode(code),13===code&&10===text.charCodeAt(t)&&(t++,r+="\n"),c=14;switch(code){case 123:return t++,c=1;case 125:return t++,c=2;case 91:return t++,c=3;case 93:return t++,c=4;case 58:return t++,c=6;case 44:return t++,c=5;case 34:return t++,r=function(){for(var e="",r=t;;){if(t>=n){e+=text.substring(r,t),d=2;break}var o=text.charCodeAt(t);if(34===o){e+=text.substring(r,t),t++;break}if(92!==o){if(o>=0&&o<=31){if(Ae(o)){e+=text.substring(r,t),d=2;break}d=6}t++}else{if(e+=text.substring(r,t),++t>=n){d=2;break}switch(o=text.charCodeAt(t++)){case 34:e+='"';break;case 92:e+="\\";break;case 47:e+="/";break;case 98:e+="\b";break;case 102:e+="\f";break;case 110:e+="\n";break;case 114:e+="\r";break;case 116:e+="\t";break;case 117:var c=f(4,!0);c>=0?e+=String.fromCharCode(c):d=4;break;default:d=5}r=t}}return e}(),c=10;case 47:var e=t-1;if(47===text.charCodeAt(t+1)){for(t+=2;t<n&&!Ae(text.charCodeAt(t));)t++;return r=text.substring(e,t),c=12}if(42===text.charCodeAt(t+1)){t+=2;for(var l=n-1,m=!1;t<l;){if(42===text.charCodeAt(t)&&47===text.charCodeAt(t+1)){t+=2,m=!0;break}t++}return m||(t++,d=1),r=text.substring(e,t),c=13}return r+=String.fromCharCode(code),t++,c=16;case 45:if(r+=String.fromCharCode(code),++t===n||!Te(text.charCodeAt(t)))return c=16;case 48:case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:return r+=function(){var e=t;if(48===text.charCodeAt(t))t++;else for(t++;t<text.length&&Te(text.charCodeAt(t));)t++;if(t<text.length&&46===text.charCodeAt(t)){if(!(++t<text.length&&Te(text.charCodeAt(t))))return d=3,text.substring(e,t);for(t++;t<text.length&&Te(text.charCodeAt(t));)t++}var n=t;if(t<text.length&&(69===text.charCodeAt(t)||101===text.charCodeAt(t)))if((++t<text.length&&43===text.charCodeAt(t)||45===text.charCodeAt(t))&&t++,t<text.length&&Te(text.charCodeAt(t))){for(t++;t<text.length&&Te(text.charCodeAt(t));)t++;n=t}else d=3;return text.substring(e,n)}(),c=11;default:for(;t<n&&h(code);)t++,code=text.charCodeAt(t);if(o!==t){switch(r=text.substring(o,t)){case"true":return c=8;case"false":return c=9;case"null":return c=7}return c=16}return r+=String.fromCharCode(code),t++,c=16}}function h(code){if(Ie(code)||Ae(code))return!1;switch(code){case 125:case 93:case 123:case 91:case 34:case 58:case 44:case 47:return!1}return!0}return{setPosition:function(e){t=e,r="",o=0,c=16,d=0},getPosition:function(){return t},scan:e?function(){var e;do{e=l()}while(e>=12&&e<=15);return e}:l,getToken:function(){return c},getTokenValue:function(){return r},getTokenOffset:function(){return o},getTokenLength:function(){return t-o},getTokenError:function(){return d}}}function Ie(e){return 32===e||9===e||11===e||12===e||160===e||5760===e||e>=8192&&e<=8203||8239===e||8287===e||12288===e||65279===e}function Ae(e){return 10===e||13===e||8232===e||8233===e}function Te(e){return e>=48&&e<=57}!function(e){e.DEFAULT={allowTrailingComma:!1}}(we||(we={}));var Me=Se;function Pe(e){return{getInitialState:function(){return new ze(null,null,!1)},tokenize:function(line,t,n,r){return function(e,line,t,n,r){void 0===n&&(n=0);var o=0,c=!1;switch(t.scanError){case 2:line='"'+line,o=1;break;case 1:line="/*"+line,o=2}var d,f,l=Me(line),h=t.lastWasColon;f={tokens:[],endState:t.clone()};for(;;){var m=n+l.getPosition(),v="";if(17===(d=l.scan()))break;if(m===n+l.getPosition())throw new Error("Scanner did not advance, next 3 characters are: "+line.substr(l.getPosition(),3));switch(c&&(m-=o),c=o>0,d){case 1:case 2:v=Re,h=!1;break;case 3:case 4:v=je,h=!1;break;case 6:v=Fe,h=!0;break;case 5:v=De,h=!1;break;case 8:case 9:v=Le,h=!1;break;case 7:v=Oe,h=!1;break;case 10:v=h?We:Ue,h=!1;break;case 11:v=Ne,h=!1}if(e)switch(d){case 12:v=Ke;break;case 13:v=Ve}f.endState=new ze(t.getStateData(),l.getTokenError(),h),f.tokens.push({startIndex:m,scopes:v})}return f}(e,line,t,n)}}}var Re="delimiter.bracket.json",je="delimiter.array.json",Fe="delimiter.colon.json",De="delimiter.comma.json",Le="keyword.json",Oe="keyword.json",We="string.value.json",Ne="number.json",Ue="string.key.json",Ve="comment.block.json",Ke="comment.line.json",ze=function(){function e(e,t,n){this._state=e,this.scanError=t,this.lastWasColon=n}return e.prototype.clone=function(){return new e(this._state,this.scanError,this.lastWasColon)},e.prototype.equals=function(t){return t===this||!!(t&&t instanceof e)&&(this.scanError===t.scanError&&this.lastWasColon===t.lastWasColon)},e.prototype.getStateData=function(){return this._state},e.prototype.setStateData=function(e){this._state=e},e}();function He(e){var t=[],n=new T(e);t.push(n);var r=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return n.getLanguageServiceWorker.apply(n,e)},o=e.languageId;t.push(monaco.languages.registerCompletionItemProvider(o,new he(r))),t.push(monaco.languages.registerHoverProvider(o,new ve(r))),t.push(monaco.languages.registerDocumentSymbolProvider(o,new ke(r))),t.push(monaco.languages.registerDocumentFormattingEditProvider(o,new _e(r))),t.push(monaco.languages.registerDocumentRangeFormattingEditProvider(o,new ye(r))),t.push(new se(o,r,e)),t.push(monaco.languages.setTokensProvider(o,Pe(!0))),t.push(monaco.languages.setLanguageConfiguration(o,qe)),t.push(monaco.languages.registerColorProvider(o,new Ee(r))),t.push(monaco.languages.registerFoldingRangeProvider(o,new xe(r)))}n.d(t,"setupMode",function(){return He});var qe={wordPattern:/(-?\d*\.\d\w*)|([^\[\{\]\}\:\"\,\s]+)/g,comments:{lineComment:"//",blockComment:["/*","*/"]},brackets:[["{","}"],["[","]"]],autoClosingPairs:[{open:"{",close:"}",notIn:["string"]},{open:"[",close:"]",notIn:["string"]},{open:'"',close:'"',notIn:["string"]}]}}}]);