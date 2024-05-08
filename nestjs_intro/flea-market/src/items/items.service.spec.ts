import { Test } from '@nestjs/testing';
import { ItemsService } from './items.service';
import { ItemRepository } from './item.repository';

const mockItemRepository = () => ({});

describe('itemsServiceTest', () => {
  let itemsService;
  let itemRepository;

  beforeEach(() => {
    const module = await Test.createTestingModule({
      providers: [
        ItemsService,
        {
          provide: ItemRepository,
          useFactory: mockItemRepository,
        },
      ],
    }).compile();
  });
});
