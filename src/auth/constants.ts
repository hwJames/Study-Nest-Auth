import { SetMetadata } from '@nestjs/common';

export const jwtConstants = {
  // 추후 env 로 교체
  secret: 'secretKeyExample',
};

export const IS_PUBLIC_KEY = 'isPublic';
export const Public = () => SetMetadata(IS_PUBLIC_KEY, true);
