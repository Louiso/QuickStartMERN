const getForoById = ({id},{user, edit}) => {
  if(!user) return {
    ok: false,
    errors: [{
      message: 'Usuario no autentificado'
    }],
    data: null
  }
  if(!edit) return{
    ok: false,
    errors: [{
      message: 'No puedes editar pendejo'
    }],
    data: null
  }
  return {
    ok: true,
    data: {
      personas:[
        {
          nombre: 'alex'
        },{
          nombre: 'vallugas'
        }
      ]
    },
    errors: []
      
  }
}

export {
  getForoById
}