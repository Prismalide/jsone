/* jsonHtml.js *//*05/2017
/* from prismalide.com 
/* license : pmlBSD source
/* version: v.0.9*
/* invasion javascript: jsonHtml
/* compatibility: IE>8
/***/

"use strict"
try{ "".a = ""; console.log( "jsonHtml","not in strict mode" ) } catch( e ){}

//______ jsonHtml ___ //v.0.9*. From prismalide.com, sea gitHub.com/prismalide/settingsJs. License:pmlBSD source. Keep this line
function jsonHtml ( data ) {
	"use strict"
    var ObjKeys = Object.keys ,tagInner = "" ,postTag = [] ,cls= 'class="'
    if ( typeof data[ 0 ] == 'object'){ jsonHtmlcore( data[ 0 ] ) }
    for ( var i = 1; i < data.length; i++ ){
        if ( data[ i ] instanceof Array ) { tagInner += jsonHtml ( data[ i ] ); continue }
        jsonHtmlcore( data[ i ] )
        }
    return tagInner + postTag.reverse().toString().replace( /,/g , '')
    //______ jsonHtmlcore ______________ /
    function jsonHtmlcore ( data ) {
//... gérer balises orphelines 
        if ( data || data == '' ) {
            if ( typeof data == "object" ){ 
                var dataObjKeys = ObjKeys( data ) ,tagName = dataObjKeys[ 0 ] ,content = data[ tagName ] ,objclass = content ,cls = ""
                //_ gestion class ______ /
                if ( typeof content == 'object' ) {                      
                    while ( typeof ( cls += ObjKeys( content )[0] + " ", content = content[ObjKeys( content )[0]] ) == 'object' ){}
                    cls += '" '
                    }
                content = cls + content
                //_ gestion id _________ /
//...				if ( ObjKeys( data )[ 1 ] == 'id' ) { id = "id='"+data[ ObjKeys( data )[ 1 ] ] + "'" }
                for ( var i = 1; i < dataObjKeys.length; i++){
                    content =  dataObjKeys[i]+ '="'+data[ dataObjKeys[i]] + '" ' + content }
                tagInner += '<'+tagName+ ( content? ' '+content+'' : '') + '>' 
                postTag.push('</'+tagName+'>')
                return
                }
            tagInner += data // texte dans inner
            return
            }
        ///  <br />  \\\        
        tagInner += '<br />' // br dans inner
        return
        }
    }
