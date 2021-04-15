import { DialogComponent } from './dialog.component';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {createComponentFactory, Spectator} from '@ngneat/spectator';

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
    const div = spectator.query('span');
    expect(div).toHaveText('Hello, John Doe');
  });

  it('should be Barry Boe when manipulating data and detectChanges (but it fails, because it is John Doe)', () => {
    spectator.component.data.name = 'Barry Boe';
    spectator.detectChanges();
    const div = spectator.query('span');
    expect(div).toHaveText('Hello, Barry Boe');
  });

  it('should be John Doe again (but it fails, because it is Barry Boe)', () => {
    const div = spectator.query('span');
    expect(div).toHaveText('Hello, John Doe');
  });
});
