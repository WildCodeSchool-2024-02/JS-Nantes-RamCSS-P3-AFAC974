import PropTypes from "prop-types";

function FormDelete({ item, id, setMessageRequest }) {
  const handleDelete = async (event) => {
    event.preventDefault();

    const deleteFileFetch = await fetch(
      `${import.meta.env.VITE_API_URL}/api/${item}s/delete/${id}`,
      {
        method: "DELETE",
      }
    );

    if (deleteFileFetch.status) {
      setMessageRequest(`L'${item} a bien été supprimé de la base de donnée.`);
    } else {
      setMessageRequest(
        `Une erreur c'est produite lors de la suppression de l'${item}.`
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
  setMessageRequest: PropTypes.string.isRequired,
};

export default FormDelete;
