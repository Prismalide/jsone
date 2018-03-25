/* jsonHtml.js *//*05/2017
/* from prismalide.com 
/* license : BSD 2
/* version: alpha
/* invasion javascript: jsonHtml
/* compatibility: IE>8
/***/

"use strict"
try{ "".a = ""; console.log( "jsonHtml","not in strict mode" ) } catch( e ){}

//______ jsonHtml ___//License code: BSD 2. From prismalide.com, jsonHtml v.0.9* gitHub for details 
function jsonHtml ( data ) {
    //!-bringVar:
    var ObjKeys = Object.keys
    var tagtxt = ""
    var postTag = []
    if ( typeof data[ 0 ] == 'object'){ jsonHtmlcore( data[ 0 ] ) }
    for ( var i = 1; i < data.length; i++ ){
        if ( data[ i ] instanceof Array ) { tagtxt += jsonHtml ( data[ i ] ); continue }
        jsonHtmlcore( data[ i ] )
        }
    return tagtxt + postTag.reverse().toString().replace( /,/g , '')
    //______ jsonHtmlore ___________//
    function jsonHtmlcore ( data ) {
        if ( data || data == '' ) {
            if ( typeof data == "object" ){ 
                var dataObjKeys = ObjKeys( data ) 
                var tagName = dataObjKeys[ 0 ]
                var content = data[ tagName ]
                var objclass = content 
                var cls = ""
                ///  gestion class  \\\
                if ( typeof content == 'object' ) {                      
                    cls= "class='"
                    while ( typeof ( cls += ObjKeys( content )[0] + " ", content = content[ObjKeys( content )[0]] ) == 'object' ){}
                    cls += "' "
                    }
                content = cls + content
                ///  gestion id  \\\
                // if ( ObjKeys( data )[ 1 ] == 'id' ) { id = "id='"+data[ ObjKeys( data )[ 1 ] ] + "'" }
                for ( var i = 1; i < dataObjKeys.length; i++){
                    content =  dataObjKeys[i]+ "='"+data[ dataObjKeys[i]] + "' " + content }
                tagtxt += '<'+tagName+ ( content? ' '+content+'' : '') + '>' 
                postTag.push('</'+tagName+'>')
                return jsonHtmlcore
                }
            tagtxt += data // texte dans inner
            return jsonHtmlcore
            }
        ///  <br />  \\\        
        tagtxt += '<br />' // br dans inner
        return jsonHtmlcore
        }
    }
