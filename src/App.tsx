import { Home } from './components/Pages/Home';
import AvatarUploadProvider from './context/AvatarUpload/AvatarUploadProvider';

function App() {
  return (
    <AvatarUploadProvider>
      <Home />;
    </AvatarUploadProvider>
  );
}

export default App;
