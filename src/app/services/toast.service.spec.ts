import { TestBed } from '@angular/core/testing';

import { ToastService } from './toast.service';
/* Ari Martelius (1800582), Tommi Ralli (1800583) */
describe('ToastService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ToastService = TestBed.get(ToastService);
    expect(service).toBeTruthy();
  });
});
