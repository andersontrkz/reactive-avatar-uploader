import { render, waitFor, fireEvent } from '@testing-library/react';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { configure } from 'enzyme';

import '@testing-library/jest-dom/extend-expect';
import '@testing-library/jest-dom';

import { Home } from '../components/Pages/Home';

configure({ adapter: new Adapter() });

describe('Render', () => {
  const component = render(<Home />);

  it('Should render a dropzone', () => {
    expect(component.getByTestId('dropzone')).toBeInTheDocument();
  });
});

describe('Initial State', () => {
  it('No images uploaded', async () => {
    const { getByTestId } = render(<Home />);
    const uploader = getByTestId('dropzone');

    //@ts-ignore
    expect(uploader.files).toBe(undefined);
  });
});

describe('Upload', () => {
  let file: File;

  beforeEach(() => {
    file = new File(['avatar'], 'avatar.png', { type: 'image/png' });
  });

  it('Avatar is success uploaded', async () => {
    const { getByTestId } = render(<Home />);
    const uploader = getByTestId('dropzone');

    await waitFor(() =>
      fireEvent.change(uploader, {
        target: { files: [file] },
      }),
    );

    //@ts-ignore
    expect(uploader.files[0].name).toBe('avatar.png');
  });

  it('Exists one avatar image uploaded', async () => {
    const { getByTestId } = render(<Home />);
    const uploader = getByTestId('dropzone');

    await waitFor(() =>
      fireEvent.change(uploader, {
        target: { files: [file] },
      }),
    );

    //@ts-ignore
    expect(uploader.files.length).toBe(1);
  });
});

describe('Change Image', () => {
  let file: File;
  let file2: File;

  beforeEach(() => {
    file = new File(['avatar'], 'avatar.png', { type: 'image/png' });
    file2 = new File(['avatar2'], 'avatar2.png', { type: 'image/png' });
  });

  it('Avatar2 is success uploaded', async () => {
    const { getByTestId } = render(<Home />);
    const uploader = getByTestId('dropzone');

    await waitFor(() =>
      fireEvent.change(uploader, {
        target: { files: [file] },
      }),
    );

    await waitFor(() =>
    fireEvent.change(uploader, {
      target: { files: [file2] },
    }),
  );

    //@ts-ignore
    expect(uploader.files[0].name).toBe('avatar2.png');
  });

  it('Exists only one avatar image uploaded', async () => {
    const { getByTestId } = render(<Home />);
    const uploader = getByTestId('dropzone');

    await waitFor(() =>
      fireEvent.change(uploader, {
        target: { files: [file] },
      }),
    );

    await waitFor(() =>
    fireEvent.change(uploader, {
      target: { files: [file2] },
    }),
  );

    //@ts-ignore
    expect(uploader.files.length).toBe(1);
  });
});
