import { TestBed } from '@angular/core/testing';

import { GeneratetextService } from './generatetext.service';

describe('GeneratetextService', () => {
  let service: GeneratetextService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GeneratetextService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be integer', function()
  {
    service = TestBed.inject(GeneratetextService);
    var wordsQty = service.calculateWords();
    expect(wordsQty).toEqual(jasmine.any(Number));
    expect(wordsQty).toBeGreaterThan(0);
  });

});
