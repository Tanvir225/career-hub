import PropTypes from 'prop-types';
const SingleCat = ({ cat }) => {
    return (
        <div className="border space-y-3 border-indigo-400  shadow-xl rounded-lg p-5 bg-indigo-50">
            <figure className="w-[70px] h-[70px] rounded-lg">
                <img src={cat.logo} alt="" className="w-full" />
            </figure>
            <p>{cat.category_name}</p>
            <p>{cat.availability}</p>
        </div>
    );
};
SingleCat.propTypes = {
    cat : PropTypes.object.isRequired
}
export default SingleCat;