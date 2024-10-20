/**
 * De la ligne 5 à la ligne 11, c'est la portion de code qui empeche le rafraichissement 
 * de la page 
 */
let form = document.getElementById('formId')

function block(event){
        event.preventDefault()
}

form.addEventListener('submit',block)

//Fonction principale, celle de l'ajout des commentaires
function addComment(){

        // Création des balises similaire à celle du code html
        let divPrincipale = document.createElement('div')
        let divSecondaire = document.createElement('div')
        let titreTrois = document.createElement('h3')
        let divTertiaire = document.createElement('div')
        let paragraph = document.createElement('p')

        //recupération des id des balises html afin de les exploitait dans le code js, voir : code HTML, ligne 17, 52, 72, 78, 87  
        let liste = document.getElementById('comment-list')
        let prenom = document.getElementById('first-name')
        let nom = document.getElementById('last-name')
        let textArea = document.getElementById('message') 
        let MessageError = document.getElementById('error-message')

        //Récupération des valeurs saisie par l'utilisateur
        let prenomText = document.createTextNode(prenom.value)
        let espace = document.createTextNode(" ")
        let nomText = document.createTextNode(nom.value)
        let areaText = document.createTextNode(textArea.value)

        //Attribution du style à nos balises qui seront affichés, Je voulais utiliser les meme class présente dans le fichier index.html, j'ai donc utiliser la syntaxe nomVariable.setAttribute() pour récupérer les attributs des class que je voulais 
        //Source : J'ai trouvé cette façon de faire sur https://developer.mozilla.org/en-US/docs/Web/API/Element/getAttribute
        divPrincipale.setAttribute('class', "flex space-x-4 text-sm text-gray-500")
        divSecondaire.setAttribute('class',"flex-1 py-10 border-t border-gray-200")
        titreTrois.setAttribute('class',"font-medium text-gray-900")
        divTertiaire.setAttribute('class',"prose prose-sm mt-4 max-w-none text-gray-500")

        //Condition lorsqu'un champ est vide, vous remarquerez que  MessageError passe en display block, c'est parce que par defaut il est en display none dans le code html 
        if ((prenom.value && nom.value && areaText.value) == "") {
                MessageError.style.display="block"
        }else if(prenom.value == "" && (nom.value && areaText.value) !== ""){
                MessageError.style.display="block"
        }else if (nom.value == "" && (prenom.value && areaText.value) !== "") {
                MessageError.style.display="block"
        }else if (textArea.value == "" && (prenom.value && nom.value) !== "") {
                MessageError.style.display="block"
        }else{
                liste.appendChild(divPrincipale)
                divPrincipale.appendChild(divSecondaire)
                divSecondaire.appendChild(titreTrois)
                divSecondaire.appendChild(divTertiaire)
                divSecondaire.appendChild(paragraph)

                //C'est ici que les informations venant du formulaire s'afficheront dans le nouvelle espace commentaire
                titreTrois.appendChild(prenomText)
                titreTrois.appendChild(espace)
                titreTrois.appendChild(nomText)
                paragraph.appendChild(areaText)

                MessageError.style.display="none"
        }       
}

//Fonction qui supprime les ecrits de l'utilisateurs lorsqu'il appuie sur le bouton
function DeleteFroms() {
        document.getElementById('first-name').value = ""
        document.getElementById('last-name').value = ""
        document.getElementById('message').value = "" 
}

//Cette fonction execute toute les autres fonctions
function Run(){
        addComment()
        DeleteFroms()
}