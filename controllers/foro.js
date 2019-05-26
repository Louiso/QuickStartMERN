'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var getForoById = function getForoById(_ref, _ref2) {
  var id = _ref.id;
  var user = _ref2.user,
      edit = _ref2.edit;

  if (!user) return {
    ok: false,
    errors: [{
      message: 'Usuario no autentificado'
    }],
    data: null
  };
  if (!edit) return {
    ok: false,
    errors: [{
      message: 'No puedes editar pendejo'
    }],
    data: null
  };
  return {
    ok: true,
    data: {
      personas: [{
        nombre: 'alex'
      }, {
        nombre: 'vallugas'
      }]
    },
    errors: []

  };
};

exports.getForoById = getForoById;