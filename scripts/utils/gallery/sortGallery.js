
// function permettant le trie Croissant d'un tableau de gallery média par Titre, Popularité & Date
// Selectionné par un Select on entre un tableau et ilm en result un tableau trié
export function sortGallery (gallery) {

    let selectTrieValue = document.querySelector("#Trie").value;
    let result = runTrie();

    function runTrie () {
        return trie (selectTrieValue, gallery);
    }

    function trie (critere, galery) {
        let galleryTrie="";

        switch (critere.toLowerCase()) {

            case 'popularite':
                galleryTrie = galery.sort(function (a,b) {
                    return a.likes - b.likes;
                });
                break
            
            case 'titre':
                galleryTrie = galery.sort(function (a,b) {
                    return a.title.localeCompare(b.title);
                  });
                break
                case 'date':
                  galleryTrie = galery.sort(function (a,b) {
                    return new Date(b.date) - new Date(a.date);
                   });
                break
            default:
                console.log("critère de trie undefined..");
        }
        return galleryTrie;
    }
    return {result, runTrie}
}