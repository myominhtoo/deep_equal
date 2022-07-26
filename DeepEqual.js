
class DeepEqual{

    static check( valOne , valTwo ){
       
        if( typeof valOne !== "object" && typeof valTwo !== "object" ){

            if( (typeof valOne == 'boolean' && typeof valTwo == 'boolean')){
                return valOne == valTwo;
            }else if(isNaN(valOne) && isNaN(valTwo) && (typeof valOne != 'string' && typeof valTwo != 'string')){
                return true;
            }
            else if(valOne == undefined && valTwo == undefined){
                return true;
            }else{
               if(typeof valOne != 'boolean' || typeof valOne != 'boolean'){
                 return valOne == valTwo;
               }else{
                return false;
               }
            }

        }

        if( Array.isArray(valOne) && Array.isArray(valTwo) ){

            if( valOne.length == 0 && valTwo.length == 0){
                return true;
            }

            if( valOne.length == valTwo.length ){

                let status = true;

                valOne.forEach( (oneVal,i) => {
                    
                    DeepEqual.check(oneVal,valTwo[i])
                    ? status = status && true
                    : status = false;
                   
                })

                return status;

            }

        }

        if( typeof valOne == "object" && typeof valTwo == "object" && valOne != null && valTwo != null && !Array.isArray(valOne) && !Array.isArray(valTwo) ){
            const valOneKeys = Object.keys(valOne);
            const valTwoKeys = Object.keys(valTwo);

            if(DeepEqual.check(valOneKeys,valTwoKeys)){

                let status = true;

               valOneKeys.forEach( (valOneKey,i) => {

                  DeepEqual.check( valOne[valOneKey] , valTwo[valTwoKeys[i]])
                  ? status = status && true
                  : status = false;
        
               })

               return status;
    
            }
        }

        if( valOne == null && valTwo == null ){

            return true;
        }

        return false;
    }

}

module.exports = DeepEqual;