# Le typeScript 
    C'est une amélioration du JavaScript (c'est du jacascript avec des fonctionnalités supplémentaires).
    Les navigateurs actuels ne comprennent pas le typescript donc il ya une étape de compilation.
    Le code typescript est donné au compilateur et le compilateur le traduit en javascript

# Installer des packages typescript
    npm i -g typescript 

# Connaitre la version de typescript
    tsc -v pour voir la version	

# Compilation 
    tsc : pour compiler tous les fichiers typescript
    Lorsqu'on compile un ficher index.ts automatiquement un fichier index.js est créé

# Créer un fichier de configuration
    tsc --init 
## Explications de la compilation
    Dans le fichier de configuration se trouve le champs outdir ou va se touver les js lors de la compilation
    Par défaut lorsque nous compilons tu typescript meme s'il ya des erreurs le fichier javascript est créé donc pour pallier a cela il faut activer l'option noEmitOnError du fichier de configuration
    activer ce champ removeComments pour désactiver les commentaires lors de la compilation dans les fichiers js

# Debugging
## Option SourceMap
    Fichier qui spécifie comment chaque ligne de notre code typescript correspond à notre code javascript


