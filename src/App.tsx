import Toast from './components/ui-emenets/toast/Toast';
import GlobalContextProvider from './providers/GlobalContextProvider';
import MovieRouter from './router/MovieRouter';
import 'assets/styles/style.scss';

const App = () => {
  return (
    <GlobalContextProvider>
      <MovieRouter />
      <Toast />
    </GlobalContextProvider>
  );
};

export default App;
