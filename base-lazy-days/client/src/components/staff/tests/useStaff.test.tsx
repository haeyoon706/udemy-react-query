import { useStaff } from '../hooks/useStaff';
import { act, renderHook } from '@testing-library/react-hooks';

import { createQueryClientWrapper } from '../../../test-utils';

test('filter staff', async () => {
  const { result, waitFor } = renderHook(useStaff, {
    wrapper: createQueryClientWrapper(),
  });

  // wait for the staff populate
  await waitFor(() => result.current.staff.length === 4);

  // set to filter for only staff who give massage
  act(() => result.current.setFilter('facial'));

  // wait for the staff list to display only 3
  await waitFor(() => result.current.staff.length === 3);
});
