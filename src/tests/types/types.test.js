import { types } from '../../types/types';

describe('Pruebas en types.js', () => {
  
  test('Deberias devolver el mismo objecto', () => {
    const typeTest = {
      login: '[Auth] Login',
      logout: '[Auth] Logout',
      uiSetError: '[UI] Set Error',
      uiRemoveError: '[UI] Remove Error',
      uiStartLoading: '[UI] Start loading',
      uiFinishLoading: '[UI] Finish loading',
      notesAddNew: '[Notes] New note',
      notesActive: '[Notes] Set active note',
      notesLoad: '[Notes] Load notes',
      notesUpdated: '[Notes] Update note',
      notesFileUrl: '[Notes] Set note url',
      notesDelete: '[Notes] Delete note',
      notesLogoutCleaning: '[Notes] Logout cleaning',
    }
    expect(types).toEqual(typeTest);
  });


});