import { TestBed } from '@angular/core/testing';

import { PanierService } from './panier.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';

describe('PanierService', () => {
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PanierService]
    });

    httpTestingController = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    const service: PanierService = TestBed.get(PanierService);
    expect(service).toBeTruthy();
  });
});
