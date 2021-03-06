import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupTest } from 'ember-mocha';

describe('Unit | Route | broadcast', function() {
  setupTest('route:broadcast', {
     needs: [
      'service:metrics',
      'service:fastboot',
      'service:session',
      'ember-metrics@metrics-adapter:piwik'
     ]
  });

  it('exists', function() {
    let route = this.subject();
    expect(route).to.be.ok;
  });
});
