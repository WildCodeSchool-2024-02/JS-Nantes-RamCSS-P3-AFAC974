import PropTypes from "prop-types";

function FormDelete({ item, id, SetMessageRequest }) {
  const handleDelete = async (event) => {
    event.preventDefault();

    const deleteFileFetch = await fetch(
      `${import.meta.env.VITE_API_URL}/api/${item}s/delete/${id}`,
      {
        method: "DELETE",
      }
    );

    if (deleteFileFetch.status) {
      SetMessageRequest(`L'${item} a bien été supprimé de la base de donner.`);
    } else {
      SetMessageRequest(
        `Une erreur c'est produit lors de la suppression de l'${item}.`
      );
    }

    return null;
  };

  return (
    <button className="button-form" type="button" onClick={handleDelete}>
      supprimer {item}
    </button>
  );
}
FormDelete.propTypes = {
  item: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  SetMessageRequest: PropTypes.string.isRequired,
};

export default FormDelete;
