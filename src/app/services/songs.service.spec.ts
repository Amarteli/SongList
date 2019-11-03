import { TestBed } from '@angular/core/testing';

import { SongsService } from './songs.service';
/* Ari Martelius (1800582), Tommi Ralli (1800583) */
describe('SongsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SongsService = TestBed.get(SongsService);
    expect(service).toBeTruthy();
  });
});
