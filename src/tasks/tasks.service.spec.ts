import { TasksRepository } from './tasks.repository';
import { TasksService } from './tasks.service';
import { Test } from '@nestjs/testing';

const mockTasksRepository = () => ({
  getTasks: jest.fn(),
});

const mockUser = {
  username: 'khanh',
  id: 'someId',
  password: 'somepass',
  task: [],
};

describe('TasksService', () => {
  let tasksService: TasksService;
  let tasksRepository: TasksRepository;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        TasksService,
        { provide: TasksRepository, useFactory: mockTasksRepository },
      ],
    }).compile();

    tasksService = module.get(TasksService);
    tasksRepository = module.get(TasksRepository);
  });

  describe('getTasks', () => {
    it('call TasksRepository.getTasks and return the result', () => {
      expect(tasksRepository.getTasks).not.toHaveBeenCalled();

      // call tasksService.getTasks, which should then call the repository's getTasks
      tasksService.getTasks(null, mockUser);
      expect(tasksRepository.getTasks).toHaveBeenCalled();
    });
  });
});
