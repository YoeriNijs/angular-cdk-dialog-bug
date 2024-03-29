import { DialogComponent } from './dialog.component';
import {createComponentFactory, Spectator} from '@ngneat/spectator';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

describe('DialogComponent', () => {

  let spectator: Spectator<DialogComponent>;

  const createComponent = createComponentFactory({
    component: DialogComponent,
    mocks: [MatDialogRef],
    providers: [
      { provide: MAT_DIALOG_DATA, useValue: { name: 'John Doe' }}
    ]
  });

  beforeEach(() => spectator = createComponent());

  it('initial', () => {
    const span = spectator.query('span');
    expect(span).toHaveText('Hello, John Doe');
  });

  it('should be Barry Boe when manipulating data and detectChanges (but it fails, because it is John Doe)', () => {
    spectator.component.data.name = 'Barry Boe';
    spectator.detectChanges();
    const span = spectator.query('span');
    expect(span).toHaveText('Hello, Barry Boe');
  });

  it('should be John Doe again (but it fails, because it is Barry Boe)', () => {
    const span = spectator.query('span');
    expect(span).toHaveText('Hello, John Doe');
  });
});
