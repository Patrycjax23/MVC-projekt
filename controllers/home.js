const getIndex = (req, res) => {

    res.render('index', { title: 'Strona Główna' });
};

module.exports = {
    getIndex
};

