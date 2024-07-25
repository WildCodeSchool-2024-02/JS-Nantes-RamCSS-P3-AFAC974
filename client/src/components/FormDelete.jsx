import PropTypes from "prop-types";
import { useRevalidator } from "react-router-dom";

function FormDelete({ item, id, setMessageRequest }) {
  const revalidator = useRevalidator();
  const handleDelete = async (event) => {
    event.preventDefault();

    const deleteFileFetch = await fetch(
      `${import.meta.env.VITE_API_URL}/api/${item}s/delete/${id}`,
      {
        method: "DELETE",
      }
    );

    if (deleteFileFetch.ok) {
      setMessageRequest(`L'${item} a bien été supprimé de la base de donnée.`);
      revalidator.revalidate();
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
