import { CreateTaskParams } from '@/app/services/types';

export const createTask = async (params: CreateTaskParams) => {

  const searchParams = new URLSearchParams({
    token: params.token,
    title: params.title,
    description: params.description,
    tags: params.tags,
    budget_from: params.budget_from.toString(),
    budget_to: params.budget_to.toString(),
    deadline: params.deadline.toString(),
    reminds: params.reminds.toString(),
    all_auto_responses: params.all_auto_responses.toString(),
    ...(params.all_auto_responses ? {} : { rules: params.rules || '' }),
  });

  const response = await fetch(`https://deadlinetaskbot.productlove.ru/api/v1/tasks/client/newhardtask?${searchParams}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error('Ошибка при публикации задачи');
  }

  return response;
};