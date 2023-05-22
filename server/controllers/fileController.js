import fs from 'fs';
import db from '../db/sequelize.config';

const Image = db.Image;

const uploadFiles = async (req, res) => {

    const {title, file, description} = req.body
    
    try {
        console.log(file);

        if(file == undefined) {
            return res.send('Vous devez choisir un fichier');
        }

        await Image.create({
            title: title,
            description: description,
            file: fs.readFileSync(
                __basedir + "assets/uploads/" + title
            )
        }).then((image) => {
            fs.writeFileSync(
                __basedir + "assets/tmp" + image.title,
                image.file
            )

            return res.send('Le fichier a été chargé')
        })
    } catch (error) {
        return res.send(`Une erreur s'est produite pendant le chargement du fichier: ${error}`);
    }
}

export default uploadFiles;