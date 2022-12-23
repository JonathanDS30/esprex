function index(req, res){
  res.sendFile(resolve('public', 'index.html'));
};
function contact (req, res){
  res.sendFile(resolve('public', 'contact.html'));
};
function services(req, res){
  res.sendFile(resolve('public', 'services.html'));
};

function ctrlDefault(req, res){
  res.sendFile(resolve('public', 'error.html'));
};

module.exports = {
  index,
  services,
  contact,
  ctrlDefault
}