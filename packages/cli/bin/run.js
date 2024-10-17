#!/usr/bin/env -S node --disable-warning=ExperimentalWarning --disable-warning=DeprecationWarning
import { execute } from '@oclif/core';

await execute({ dir: import.meta.url });
