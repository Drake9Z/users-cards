
const Card = ({ picture, title, album, genre}) => {

    //const { picture, title, album, genre} = props

    return (
        <div className="song-card">
            <img src={picture} />
            <h4>Titulo: <p>{title}</p></h4>
            <h4>Album: <p>{album}</p></h4>
            <h4>Genero: <p>{genre}</p></h4>
        </div>
    );
};

export default Card;